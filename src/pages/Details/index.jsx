import { Container, Links } from "./styles.js";

import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return(
    <Container>
      <Header />

      <ButtonText title="Excluir nota" />

      <Section title="Links úteis">
        <Links>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Instagram</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}