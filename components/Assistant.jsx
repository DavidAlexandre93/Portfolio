import React, { useState } from 'react';
import { Link } from '../src/router';
import { createAssistant } from '../src/features/assistant/groundedSearch';

const assistant = createAssistant();
const suggestions = ['Quais projetos usam cloud?', 'Que tecnologias você domina?', 'Como entrar em contato?'];

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const ask = async (value = question) => {
    const prompt = value.trim();
    if (!prompt || loading) return;
    setQuestion('');
    setMessages((current) => [...current, { role: 'user', text: prompt }]);
    setLoading(true);
    const response = await assistant.ask(prompt);
    setMessages((current) => [...current, { role: 'assistant', ...response }]);
    setLoading(false);
  };

  return (
    <>
      <button type='button' className='assistant-launcher' onClick={() => setOpen(true)} aria-label='Abrir assistente de portfólio'>
        <span className='assistant-launcher__signal' />
        <span>Ask David</span>
      </button>
      {open && (
        <div className='assistant-backdrop' onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <section className='assistant-panel' role='dialog' aria-modal='true' aria-labelledby='assistant-title'>
            <header className='assistant-header'>
              <div><p className='eyebrow'>Portfolio intelligence</p><h2 id='assistant-title'>Converse com o portfólio</h2></div>
              <button type='button' className='icon-button' onClick={() => setOpen(false)} aria-label='Fechar assistente'>×</button>
            </header>
            <p className='assistant-disclosure'>Respostas grounded no conteúdo público aprovado. Sem histórico persistente e sem enviar dados para terceiros.</p>
            {!messages.length && <div className='assistant-suggestions'>{suggestions.map((item) => <button type='button' key={item} onClick={() => ask(item)}>{item}</button>)}</div>}
            <div className='assistant-messages' aria-live='polite'>
              {messages.map((message, index) => <article key={`${message.role}-${index}`} className={`assistant-message assistant-message--${message.role}`}><span>{message.role === 'user' ? 'Você' : 'Assistente'}</span><p>{message.text || message.answer}</p>{message.citations?.length > 0 && <div className='assistant-citations'>{message.citations.map((citation) => <Link key={citation.href} to={citation.href}>{citation.title} ↗</Link>)}</div>}{message.limitations?.map((item) => <small key={item}>{item}</small>)}</article>)}
              {loading && <div className='assistant-message assistant-message--assistant'><span>Assistente</span><p className='typing'>Consultando evidências<span>.</span><span>.</span><span>.</span></p></div>}
            </div>
            <form className='assistant-form' onSubmit={(event) => { event.preventDefault(); ask(); }}>
              <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder='Pergunte sobre projetos ou experiência' aria-label='Pergunta para o assistente' maxLength={240} />
              <button type='submit' disabled={loading || !question.trim()}>Enviar</button>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Assistant;