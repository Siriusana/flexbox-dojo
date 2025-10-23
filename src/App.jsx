import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [justify, setJustify] = useState('center');
  const [alignItems, setAlignItems] = useState('center');
  const [alignContent, setAlignContent] = useState('stretch');
  const [alignSelf, setAlignSelf] = useState('auto');

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '400px',
    height: '250px',
    justifyContent: justify,
    alignItems: alignItems,
    alignContent: alignContent,
    background: '#fce4ec',
    borderRadius: '15px',
    padding: '10px',
    margin: '0 auto',
    transition: 'all 0.3s ease',
  };

  const itemStyle = {
    width: '60px',
    height: '60px',
    margin: '5px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    background: '#f8bbd0',
    color: '#880e4f',
    transition: 'all 0.3s ease',
  };

  const specialStyle = {
    ...itemStyle,
    alignSelf: alignSelf,
    background: '#f48fb1',
  };

  const cssCode = `
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: ${justify};
  align-items: ${alignItems};
  align-content: ${alignContent};
}
.item-special {
  align-self: ${alignSelf};
}
`;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#ad1457' }}>🎀 Flexbox Playground Fofo</h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap',
        marginBottom: '20px'
      }}>
        <div>
          <label>justify-content</label>
          <select value={justify} onChange={e => setJustify(e.target.value)}>
            {['flex-start','center','flex-end','space-between','space-around','space-evenly'].map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div>
          <label>align-items</label>
          <select value={alignItems} onChange={e => setAlignItems(e.target.value)}>
            {['stretch','flex-start','center','flex-end','baseline'].map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div>
          <label>align-content</label>
          <select value={alignContent} onChange={e => setAlignContent(e.target.value)}>
            {['stretch','flex-start','center','flex-end','space-between','space-around','space-evenly'].map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <div>
          <label>align-self (item especial)</label>
          <select value={alignSelf} onChange={e => setAlignSelf(e.target.value)}>
            {['auto','flex-start','center','flex-end','baseline','stretch'].map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
      </div>

      <motion.div style={containerStyle} layout>
        <motion.div style={itemStyle} layout>1</motion.div>
        <motion.div style={itemStyle} layout>2</motion.div>
        <motion.div style={specialStyle} layout>3</motion.div>
        <motion.div style={itemStyle} layout>4</motion.div>
        <motion.div style={itemStyle} layout>5</motion.div>
        <motion.div style={itemStyle} layout>6</motion.div>
      </motion.div>

      <pre style={{
        background: '#fce4ec',
        padding: '15px',
        borderRadius: '12px',
        marginTop: '20px',
        color: '#880e4f',
        fontWeight: 'bold'
      }}>
        {cssCode}
      </pre>
    </div>
  );
}
