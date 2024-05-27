import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Minus voluptates sit unde aut? Voluptatem, fugit nobis illo ipsam quas,
             praesentium, nisi facilis animi reiciendis doloremque error quia. Nisi, eos iste.
          </p>

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
        </Content>
      </main>
    </Container>
  );
}