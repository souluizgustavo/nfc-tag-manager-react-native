import{Image} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles';
import { Container, Description, Title } from './styles';

const DeviceNotHaveNfc = () => (
  <Container>
    <MaterialCommunityIcons
      color={colors.secondaryColor}
      name="cellphone-nfc-off"
      size={65}
    />
    <Title>Este dispositivo não possui antena NFC</Title>
    <Description>
      Verificamos que o seu aparelho não possui antena NFC, impossibilitando
      assim, a utilização do app
    </Description>
  </Container>
);

export { DeviceNotHaveNfc };
