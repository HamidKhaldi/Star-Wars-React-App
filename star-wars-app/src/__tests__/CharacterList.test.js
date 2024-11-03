// CharacterList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../components/CharacterList/CharacterList';

// Mock data for testing
const mockCharacters = [
  { name: 'Luke Skywalker', gender: 'male', homeworld: 'Tatooine' },
  { name: 'Leia Organa', gender: 'female', homeworld: 'Alderaan' },
];

describe('CharacterList Component', () => {
  test('renders character names correctly', () => {
    // Render CharacterList component with mock data
    render(<CharacterList people={mockCharacters} />);

    // Check if character names are rendered
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Leia Organa')).toBeInTheDocument();
  });

  test('displays message when no characters are available', () => {
    // Render the component with an empty list
    render(<CharacterList people={[]} />);

    // Check for the "no characters" message
    expect(screen.getByText('Error fetching data.')).toBeInTheDocument();
  });
});
