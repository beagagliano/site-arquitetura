# Digital Project — landing page de arquitetura (React + Vite + React Router)

Recriação do protótipo do Figma "Website of architects". A Home reúne todas as seções da landing page (Hero com carrossel, About, Mission Statement, Our Projects, Contact Us e Footer) e as demais rotas reaproveitam os mesmos componentes.

## Integrantes
- Ana Luiza Marchiori
- Beatriz Gagliano Silva
- Caroline Fantinate

## Como executar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run preview  # serve o build
```

## Rotas

| Rota                | Página                                                   |
| ------------------- | -------------------------------------------------------- |
| `/`                 | Home (landing page completa)                             |
| `/projetos`         | Projects — grade com todos os projetos                   |
| `/projetos/:id`     | Detalhes do projeto (rota dinâmica, ex.: `/projetos/central-dome`) |
| `/sobre`            | About — acessada pelo botão "Read more"                  |
| `/contato`          | Contacts — formulário + dados de contato                 |
| `/galeria`          | Gallery — fotos com lightbox (item do menu do Figma)     |
| `/certificacoes`    | Certifications (item do menu do Figma)                   |
| `*`                 | Página 404                                               |

Um `id` inexistente em `/projetos/:id` mostra uma mensagem de "projeto não encontrado".

## Estrutura

```
src/
  assets/img/    fotos recortadas do protótipo
  components/    Header, Footer, Logo, Hero, AboutSection, MissionSection,
                 ProjectsMosaic, ProjectCard, ContactSection, Button, Icons, ...
  pages/         Home, Projects, ProjectDetails, About, Contact, Gallery,
                 Certifications, NotFound
  data/          projects.js (projetos e slides) e site.js (menu, textos, contato)
  styles/        global.css, components.css, sections.css
```

## Fotos

As imagens em `src/assets/img` foram recortadas dos prints do protótipo e por isso têm baixa resolução. Para a melhor qualidade, exporte os originais no Figma (botão direito na imagem → *Export*) e substitua os arquivos mantendo os mesmos nomes.

## Recursos extras

- Carrossel do hero com setas e contador 01 / 02
- Menu mobile (hambúrguer) e layout responsivo (breakpoints em 860 / 760 / 520 px)
- Mosaico de projetos com overlay no hover
- Formulário com rótulos dentro dos campos e validação (telefone, e-mail e mensagem)
- Galeria com lightbox (setas e Esc do teclado)
- Scroll ao topo a cada troca de rota
