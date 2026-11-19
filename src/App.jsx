
import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import './App.css'
import fotoJulia from './assets/foto-julia.jpeg'

// MENU DE NAVEGAÇÃO
function Menu() {
  return (
    <header>
      <h2>Julia Rodrigues</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/academica">Acadêmica</Link>
        <Link to="/profissional">Profissional</Link>
        <Link to="/projetos">Projetos</Link>
      </nav>
    </header>
  )
}

// PÁGINA INICIAL
function Home() {
  return (
    <main className="inicio">
      <div className="inicio-texto">
        <p className="subtitulo">PORTFÓLIO PESSOAL</p>

        <h1>Olá, eu sou Julia!</h1>

        <h2>Estudante de Tecnologia da Informação</h2>

        <p>
          Sou estudante da área de tecnologia, interessada em
          desenvolvimento web, design e criação de soluções digitais.
          Estou sempre buscando aprender e desenvolver novas habilidades.
        </p>

        <Link className="botao" to="/sobre">
          Conheça meu perfil
        </Link>
      </div>

      <div className="inicio-foto">
        <img src={fotoJulia} alt="Foto de Julia Rodrigues" />
      </div>
    </main>
  )
}

// PÁGINA SOBRE
function Sobre() {
  return (
    <main>
      <h1>Sobre mim</h1>

      <p>
        Sou estudante de tecnologia e tenho interesse em
        desenvolvimento de sistemas, interfaces digitais e
        experiência do usuário. Busco ampliar meus conhecimentos
        e desenvolver habilidades na área de TI.
      </p>

      <h2>Tecnologias utilizadas neste projeto</h2>

      <ul>
        <li>HTML e JSX</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Router DOM</li>
        <li>Vite</li>
        <li>API REST do GitHub</li>
      </ul>
    </main>
  )
}

// EXPERIÊNCIA ACADÊMICA
function Academica() {
  return (
    <main>
      <h1>Experiência Acadêmica</h1>

      <div className="card">
        <h2>UNICAP</h2>
        <p>Sistemas para Internet</p>
        <p>Graduação em andamento.</p>
      </div>

      <div className="card">
        <h2>Descomplica</h2>
        <p>Ciência da Computação</p>
        <p>Graduação em andamento.</p>
      </div>

      <div className="card">
        <h2>Formação complementar</h2>
        <p>Rocketseat RiseUp - HTML, CSS, JavaScript e TypeScript.</p>
        <p>Curso de Cibersegurança e Inteligência Artificial.</p>
        <p>Técnico em Administração.</p>
      </div>
    </main>
  )
}

// EXPERIÊNCIA PROFISSIONAL
function Profissional() {
  return (
    <main>
      <h1>Experiência Profissional</h1>

      <div className="card">
        <h2>Grupo JCPM - Jovem Aprendiz Administrativo</h2>
        <p>2023 – 2025</p>
        <p>
          Atuação em atividades administrativas, organização de
          documentos, planilhas, atendimento e apoio aos processos
          internos da empresa.
        </p>
      </div>

      <div className="card">
        <h2>Experiência com atividades administrativas e mídias</h2>
        <p>2025 – 2026</p>
        <p>
          Apoio em atividades administrativas, criação de materiais
          visuais e organização de conteúdos para mídias sociais.
        </p>
      </div>
    </main>
  )
}

// PROJETOS E INTEGRAÇÃO COM API
function Projetos() {
  const [repositorios, setRepositorios] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/julia1833/repos')
      .then(resposta => resposta.json())
      .then(dados => {
        if (Array.isArray(dados)) {
          setRepositorios(dados)
        }
        setCarregando(false)
      })
      .catch(erro => {
        console.log('Erro ao buscar projetos:', erro)
        setCarregando(false)
      })
  }, [])

  return (
    <main>
      <h1>Projetos Desenvolvidos</h1>

      <div className="card">
        <h2>Alopecia</h2>
        <p>Residência Tecnológica</p>
        <p>
          Aplicativo desenvolvido durante a Residência Tecnológica
          da faculdade, com o objetivo de auxiliar dermatologistas
          no acompanhamento de pacientes com alopecia.
        </p>
      </div>

      <div className="card">
        <h2>Perto</h2>
        <p>Projeto Integrador</p>
        <p>
          Marketplace conversacional desenvolvido com foco na
          divulgação e busca de anúncios por meio do WhatsApp.
        </p>
      </div>

      <div className="card">
        <h2>Minha Todo</h2>
        <p>Desenvolvimento Web</p>
        <p>
          Aplicação de lista de tarefas desenvolvida durante
          os estudos de programação e desenvolvimento web.
        </p>
      </div>

      <h2>Atividades e estudos no GitHub</h2>

      <p>
        Repositórios públicos com exercícios, atividades acadêmicas
        e estudos de programação.
      </p>

      {carregando ? (
        <p>Carregando repositórios...</p>
      ) : repositorios.length === 0 ? (
        <p>Não foi possível carregar os repositórios.</p>
      ) : (
        repositorios.map(projeto => (
          <div className="card" key={projeto.id}>
            <h3>{projeto.name}</h3>

            <p>
              {projeto.description || 'Repositório de estudos.'}
            </p>

            <a
              href={projeto.html_url}
              target="_blank"
              rel="noreferrer"
            >
              Ver no GitHub
            </a>
          </div>
        ))
      )}
    </main>
  )
}

// APLICAÇÃO PRINCIPAL
function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/academica" element={<Academica />} />
        <Route path="/profissional" element={<Profissional />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>

      <footer>
        <p>© 2026 Julia Rodrigues - Portfólio Pessoal</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
