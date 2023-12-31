import React from 'react';
import { Button } from '../../../../../components/Button';
import { Container, Form, TextInput, Title } from './styles';

interface TextFormProps {
  onChangeText: (data: string) => void;
  onNext: () => void;
  text: string;
}

const TextForm = ({ onChangeText, onNext, text }: TextFormProps) => (
  <Container>
    <Form>
      <Title>Digite o código que você deseja registrar na TAG:</Title>
      <TextInput
        onChangeText={inputText => onChangeText(inputText)}
        value={text}
      />
    </Form>
    <Button isDisabled={text === ''} onPress={onNext}>
      GRAVAR
    </Button>
  </Container>
);

export { TextForm };
