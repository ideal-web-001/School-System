import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-ask-ai-std',
  templateUrl: './ask-ai-std.component.html',
  styleUrls: ['./ask-ai-std.component.css']
})
export class AskAiStdComponent {
  userPrompt: string = '';
  response: string = '';
  loading: boolean = false;
  studentClass: string | null = null;

  private apiKey: string = 'AIzaSyDDkY6q-CR83wbpLLtLd_8PjrBtmYriyG0';
  private apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`;

  messages: { role: 'user' | 'model' | 'system'; text: string }[] = [
    {
      role: 'system',
      text: `You are a friendly and intelligent assistant for school students. 
First, ask the student to enter their class (like Class 6, 7, 8, etc.) if not already known.
Once you know the class, answer questions based on that level in a very clear and child-friendly manner.
After each answer, suggest 2-3 related questions based on the student’s current query.`,
    },
  ];

  constructor(private http: HttpClient) {}

  askAI() {
    if (!this.userPrompt.trim()) return;

    this.loading = true;
    this.response = '';

    // Add the user's prompt to the conversation
    const systemMessage = `You are a friendly tutor for students below Class 10. Keep these rules:
    1. Give short, clear answers in simple language
    2. Use examples when needed
    3. Only explain further if specifically asked
    4. Suggest 3 related follow-up questions after each answer
    5. Keep responses brief and focused
    6. Use bullet points for clarity when possible
    7. Avoid complex terms and jargon
    8. Be patient and encouraging
    9. Always ask if the student has more questions
    10. Use a friendly tone, like a teacher talking to a child
    11. If the student asks about their class, respond with "I don't know" and ask them to tell you their class.
    12. Don't give follow up questions if asked for multiple choice questions with options
    13. Use appropriate emojis to make explanations more engaging:
      - 📚 for educational content
      - ⭐ for important points
      - 💡 for examples
      - ❓ for questions
      - 👍 for encouragement
      - 🎯 for key concepts
    `;

    this.messages.push({
      role: 'user',
      text: this.userPrompt,
    });

    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemMessage}\n\n${this.userPrompt}` }],
        },
      ],
    };

    this.http.post<any>(this.apiUrl, requestBody).subscribe({
      next: async (res) => {
        const rawReply =
          res?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';
    
        // Format the response for better readability
        const formattedReply = await this.formatResponse(rawReply);
    
        // Add the AI's reply to the message history
        this.messages.push({
          role: 'model',
          text: formattedReply,
        });
    
        // Combine the user's question and the AI's response
        this.response = `
          <div>
            <b>You asked:</b> ${this.userPrompt}<br><br>
            <b>AI Says:</b><br>${formattedReply}
          </div>
        `;
    
        // Try to extract class if not already saved
        if (!this.studentClass) {
          const classMatch = this.userPrompt.match(/class\s*(\d+)/i);
          if (classMatch) {
            this.studentClass = classMatch[1];
          }
        }
    
        this.loading = false;
        this.userPrompt = '';
      },
      error: (err) => {
        this.response =
          'An error occurred: ' +
          (err?.error?.error?.message || err.message || 'Unknown error');
        this.loading = false;
      },
    });
  }

  private formatResponse(rawText: string): string {
    
    // Replace triple backticks (```) with <pre><code> blocks
    let formattedText = rawText.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      const highlightedCode = lang
        ? hljs.highlight(lang, code).value // Highlight code with the specified language
        : hljs.highlightAuto(code).value; // Auto-detect language if not specified
      return `<pre><code class="hljs">${highlightedCode}</code></pre>`;
    });

    formattedText = formattedText.replace(/(^|\n)\s*\*\s+/g, (match) => {
      return match.startsWith('\n') ? '<li>' : '<ul><li>';
    });
    formattedText = formattedText.replace(/\n/g, '</li>\n'); // Close <li> tags on newlines
    formattedText = formattedText.replace(/<\/li>\n<ul>/g, '</li><ul>'); // Fix nested lists
    formattedText = formattedText.replace(/<\/li>\n$/, '</li></ul>'); // Close <ul> at the end
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    // Replace newlines with <br> for better readability outside lists or code blocks
    formattedText = formattedText.replace(/\n/g, '<br>');
  
    return formattedText.trim();
  }

  


}
