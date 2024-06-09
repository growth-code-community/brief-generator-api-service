export function createPrompt(data) {
    return {
      data: `write a client brief in the style of a ${data.industry} brief for the ${data.industry} industry.
      
      Additional Prompt:
      ${data.customPrompt}

      Follow the standard format provided bellow and fill in the required information:
      Do not include any additional information such as contract information, social media handles, et.c, Mantian the structure provided bellow.

      Comapny name: 
      [RANDOM COMPANY NAME]

      Comapny Description:
      [ RANDOM COMPANY DESCRIPTION - Match industry ]

      Job Description: 
      [RANDOM JOB DESCRIPTION - Match user input and industry]

      Deadlines:
      [RANDOM DEADLINE - Format: X days]

      Ensure to fill in the radomized values as per the instrictions.

      The output shuould be in html body not markdown
      `
    
  }
}


