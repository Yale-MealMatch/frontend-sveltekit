import type { Question } from './types';

export const questions: Question[][] = [
	[
		{
			type: 'radio',
			name: 'year',
			label: 'What year are you?',
			description: '',
			options: [
				{ label: 'First-year', value: 2026 },
				{ label: 'Sophomore', value: 2025 },
				{ label: 'Junior', value: 2024 },
				{ label: 'Senior', value: 2023 }
			],
			validationFunction: (value) => value > 0,
			errorMessage: 'Please select a year'
		},
		{
			type: 'radio',
			name: 'pronouns',
			label: 'What are your pronouns?',
			description: 'Your pronouns will be provided to your match for ease of communication.',
			options: [
				{ label: 'he/him', value: 'he/him' },
				{ label: 'she/her', value: 'she/her' },
				{ label: 'they/them', value: 'they/them' },
				{ label: 'other', value: 'other' }
			],
			validationFunction: (value) => value !== '',
			errorMessage: 'Please select your pronouns'
		}
	],
	[
		{
			type: 'checkboxes',
			name: 'year_match',
			label: 'What year(s) would you like to match with?',
			description: 'We will try to match you with someone within your preferences.',
			options: [
				{ label: 'First-year', value: 2026 },
				{ label: 'Sophomore', value: 2025 },
				{ label: 'Junior', value: 2024 },
				{ label: 'Senior', value: 2023 }
			],
			validationFunction: (value) => value.length > 0,
			errorMessage: 'Please select at least one year'
		},
		{
			type: 'radio',
			name: 'pronouns_match',
			label: 'Match me with someone with ___ pronouns.',
			description: 'We will try our best!',
			options: [
				{ label: 'Any', value: 'any' },
				{ label: 'Same', value: 'same' },
				{ label: 'Different', value: 'different' }
			],
			validationFunction: (value) => value !== '',
			errorMessage: 'Please select an option'
		},
		{
			type: 'radio',
			name: 'pronouns_match',
			label: 'Match me with someone with...',
			description: 'We will try our best!',
			options: [
				{ label: 'Similar keywords as me', value: 'any' },
				{ label: 'Different keywords as me', value: 'same' },
				{ label: 'With these specific keywords', value: 'different' }
			],
			validationFunction: (value) => value !== '',
			errorMessage: 'Please select an option'
		}
	],
	[
				{
			type: 'input',
			name: 'nickname',
			label: 'Create a nickname:',
			description:
				"Your match will refer to you by your nickname before meeting in person. Don't use your real name. ",
			placeholder: 'Your answer',
			validationFunction: (value) => value.length > 0,
			errorMessage: 'Please enter a nickname.'
		},
		{
			type: 'input',
			name: 'email',
			label: 'What is email address?',
			description: 'Please make sure that this is correct',
			placeholder: 'jane.doe@yale.edu',
			validationFunction: (value) => /@yale.edu$/.test(value),
			errorMessage: 'Please enter your Yale email address (@yale.edu)'
		},
		{
			type: 'input',
			name: 'phone',
			label: 'What is your phone number? (Ten digits, no special characters)',
			description: 'Your number will be provided to your match for ease of communication.',
			placeholder: '1234567890',
			validationFunction: (value) => /^\d{10}$/.test(value),
			errorMessage: 'Please enter 10 digits in the form 1234567890'
		}
	]
];
