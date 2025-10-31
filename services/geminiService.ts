import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult, Audience, Framework, Tone } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    overallScore: {
      type: Type.INTEGER,
      description: "An integer from 0 to 100 representing the conversion potential of the original description.",
    },
    weaknesses: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "An array of strings, each describing a specific weakness found in the description.",
    },
    opportunities: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "An array of strings, each suggesting a high-impact improvement.",
    },
    variations: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "A short, catchy title for the variation (e.g., 'Benefit-Driven')." },
          description: { type: Type.STRING, description: "The full rewritten product description." },
          score: { type: Type.INTEGER, description: "The conversion potential score for this new variation." },
          framework: { type: Type.STRING, description: "The copywriting framework used (e.g., 'AIDA', 'PAS')." },
        },
        required: ["title", "description", "score", "framework"],
      },
    },
  },
  required: ["overallScore", "weaknesses", "opportunities", "variations"],
};

export const analyzeDescription = async (
  productName: string,
  category: string,
  description: string,
  audience: Audience,
  tone: Tone,
  framework: Framework
): Promise<AnalysisResult> => {
    const prompt = `
    You are an expert e-commerce copywriter specializing in high-converting product descriptions. Your analysis is critical for a SaaS tool that helps businesses maximize their online sales.

    CONTEXT:
    - Product Name: "${productName}"
    - Product Category: "${category}"
    - Original Description: """${description}"""
    - Target Audience: "${audience}"
    - Desired Tone: "${tone}"
    - Copywriting Framework to Use: "${framework}"

    TASK:
    Analyze the original product description and then rewrite it to maximize conversions. Provide your response in a structured JSON format.

    REQUIREMENTS FOR YOUR RESPONSE:

    1.  **Analysis of the Original Description**:
        *   **overallScore**: An integer from 0 to 100 representing the conversion potential of the original description. Score harshly; a professional but unoptimized description might be a 40-50.
        *   **weaknesses**: An array of at least 3 specific, actionable weaknesses found in the original description. (e.g., "Lacks emotional triggers," "Weak call-to-action," "Over-reliance on technical jargon.").
        *   **opportunities**: An array of at least 2 high-impact improvements. (e.g., "Incorporate social proof," "Create a sense of urgency," "Emphasize benefits over features.").

    2.  **AI-Optimized Variations**:
        *   Generate an array of exactly 3 optimized description variations.
        *   The first variation MUST strictly use the specified **${framework}** framework. The other two can use complementary frameworks (like AIDA, PAS, BAB, FAB) that you deem effective for this product.
        *   Each variation object must contain:
            *   **title**: A short, catchy title for the variation (e.g., "The '${framework}' Angle", "Benefit-Driven Story").
            *   **description**: The full rewritten product description, crafted according to the specified context (Audience, Tone). It should be a string.
            *   **score**: Your predicted conversion potential score (0-100) for this new variation. This should be significantly higher than the original score.
            *   **framework**: The primary copywriting framework you used for that specific variation (e.g., "${framework}", "AIDA", "PAS").
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema,
            },
        });

        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);

        if (!result.overallScore || !result.variations || result.variations.length === 0) {
            throw new Error("Invalid response structure from API.");
        }
        return result as AnalysisResult;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to analyze description. Please check the console for details.");
    }
};
