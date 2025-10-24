import { useState } from 'react';
import { Sparkles, RotateCcw, Plus, Minus } from 'lucide-react';

export default function App() {
  const [justify, setJustify] = useState('center');
  const [alignItems, setAlignItems] = useState('center');
  const [alignContent, setAlignContent] = useState('stretch');
  const [alignSelf, setAlignSelf] = useState('auto');
  const [flexDirection, setFlexDirection] = useState('row');
  const [gap, setGap] = useState(5);
  const [itemCount, setItemCount] = useState(6);
  const [selectedItem, setSelectedItem] = useState(3);
  const [showCode, setShowCode] = useState(true);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: flexDirection,
    width: '100%',
    maxWidth: '500px',
    minHeight: '300px',
    justifyContent: justify,
    alignItems: alignItems,
    alignContent: alignContent,
    gap: `${gap}px`,
    background: 'linear-gradient(135deg, #fce4ec 0%, #e0c0c7 100%)',
    borderRadius: '20px',
    padding: '20px',
    margin: '0 auto',
    boxShadow: '0 10px 40px rgba(238, 117, 183, 0.23)',
    border: '3px solid #f0bacaff',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const itemStyle = (index) => ({
    width: '70px',
    height: '70px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '22px',
    background: index === selectedItem ?
      'linear-gradient(135deg, #f8c7c9 0%, #cc9ba7ff 100%)' :
      'linear-gradient(135deg, #f7c7b8ff 0%, #cc9ba7ff 100%)',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: index === selectedItem ?
      '0 8px 25px #c7b9c5' :
      '0 4px 15px #db6cccff',
    transform: index === selectedItem ? 'scale(1.05)' : 'scale(1)',
    alignSelf: index === selectedItem ? alignSelf : 'auto',
    border: index === selectedItem ? '3px solid #c273be5b' : '3px solid transparent',
  });


  const cssCode = `
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${flexDirection};
  justify-content: ${justify};
  align-items: ${alignItems};
  align-content: ${alignContent};
  gap: ${gap}px;
}

.item-${selectedItem} {
  align-self: ${alignSelf};
}`;


  const resetAll = () => {
    setJustify('center');
    setAlignItems('center');
    setAlignContent('stretch');
    setAlignSelf('auto');
    setFlexDirection('row');
    setGap(5);
    setItemCount(6);
    setSelectedItem(3);
  };

  return (
    <div style={{
      padding: '30px 20px',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #fff5f8 0%, #fce4ec 100%)',
      fontFamily: "'Quicksand', sans-serif", 
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap',
        }}>
          <h1 style={{
            color: '#c88ad8ff',
            fontSize: '45px',
            fontWeight: '800',
            margin: '0 20px 0 0',
            textShadow: '2px 2px 4px rgba(133, 124, 127, 0.26)',
            fontFamily: "Lobster Two, cursive", 
          }}>
            Flexbox Dojo
          </h1>
          <button
            className="btn"
            onClick={resetAll}
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>

        {}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '25px',
          marginBottom: '25px',
          boxShadow: '0 5px 20px rgba(167, 60, 74, 0.39)',
          border: '2px solid #e9abdcff',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}>
            <div>
              {}
              <label className="control-label" htmlFor="justify-select">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="25px" fill="#d897c8ff"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/></svg>Justify-content
              </label>
              <select
                id="justify-select"
                value={justify}
                onChange={e => setJustify(e.target.value)}
                className="select-control"
              >
                {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map(opt =>
                  <option key={opt} value={opt}>{opt}</option>
                )}
              </select>
            </div>

            <div>
              {}
              <label className="control-label" htmlFor="align-items-select">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="25px" fill="#d897c8ff"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/></svg> Align-items
              </label>
              <select
                id="align-items-select"
                value={alignItems}
                onChange={e => setAlignItems(e.target.value)}
                className="select-control"
              >
                {['stretch', 'flex-start', 'center', 'flex-end', 'baseline'].map(opt =>
                  <option key={opt} value={opt}>{opt}</option>
                )}
              </select>
            </div>

            <div>
              {}
              <label className="control-label" htmlFor="align-content-select">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="25px" fill="#d897c8ff"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/></svg>Align-content
              </label>
              <select
                id="align-content-select"
                value={alignContent}
                onChange={e => setAlignContent(e.target.value)}
                className="select-control"
              >
                {['stretch', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map(opt =>
                  <option key={opt} value={opt}>{opt}</option>
                )}
              </select>
            </div>

            <div>
              {}
              <label className="control-label" htmlFor="flex-direction-select">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="25px" fill="#d897c8ff"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/></svg>Flex-direction
              </label>
              <select
                id="flex-direction-select"
                value={flexDirection}
                onChange={e => setFlexDirection(e.target.value)}
                className="select-control"
              >
                {['row', 'row-reverse', 'column', 'column-reverse'].map(opt =>
                  <option key={opt} value={opt}>{opt}</option>
                )}
              </select>
            </div>

            <div>
              {}
              <label className="control-label" htmlFor="align-self-select">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="25px" fill="#d897c8ff"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/></svg>Align-self (item {selectedItem})
              </label>
              <select
                id="align-self-select"
                value={alignSelf}
                onChange={e => setAlignSelf(e.target.value)}
                className="select-control"
              >
                {['auto', 'flex-start', 'center', 'flex-end', 'baseline', 'stretch'].map(opt =>
                  <option key={opt} value={opt}>{opt}</option>
                )}
              </select>
            </div>

            <div>
              {}
              <label className="control-label" htmlFor="gap-range">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="25px" fill="#d897c8ff"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/></svg>Gap: {gap}px
              </label>
              <input
                id="gap-range"
                type="range"
                min="0"
                max="30"
                value={gap}
                onChange={e => setGap(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#8fbef4ff',
                }}
              />
            </div>
          </div>

          <div style={{
            marginTop: '20px',
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="control-label">
                Quantidade de itens: {itemCount}
              </span>
              <button
                className="btn btn-small"
                onClick={() => setItemCount(Math.max(1, itemCount - 1))}
              >
                <Minus size={16} />
              </button>
              <button
                className="btn btn-small"
                onClick={() => setItemCount(Math.min(12, itemCount + 1))}
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              className="btn"
              onClick={() => setShowCode(!showCode)}
            >
              <Sparkles size={18} />
              {showCode ? 'Ocultar' : 'Mostrar'} CSS
            </button>
          </div>
        </div>

        {}
        <div style={{
          background: '#f7edeaff',
          borderRadius: '20px',
          padding: '25px',
          marginBottom: '25px',
          boxShadow: '0 5px 20px #d17878ff',
          border: '2px solid #ffa1e7ff',
        }}>
          <p style={{
            textAlign: 'center',
            color: '#6198b1ff',
            fontWeight: '600',
            marginBottom: '15px',
            fontSize: '14px',
          }}>
            CLIQUE EM UM ITEM PARA SELECIONÁ-LO E APLICAR "align-self"
          </p>
          <div style={containerStyle}>
            {Array.from({ length: itemCount }, (_, i) => i + 1).map(num => (
              <div
                key={num}
                style={itemStyle(num)}
                onClick={() => setSelectedItem(num)}
                onMouseEnter={(e) => {
                  if (num !== selectedItem) {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 20px #a45785';
                  }
                }}
                onMouseLeave={(e) => {
                  if (num !== selectedItem) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px #a45785';
                  }
                }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {}
        {showCode && (
          <div style={{
            background: '#f8f8ec',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 5px 20px #8e6b4eff',
            border: '2px solid #fce4ec',
            animation: 'slideIn 0.3s ease',
          }}>
            <h3 style={{
              color: '#d994c7b2',
              marginTop: '0',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <Sparkles size={20} />
              Código CSS Gerado
            </h3>
            <pre style={{
              background: 'linear-gradient(135deg, #fff1f8 0%, #ffceed 100%)',
              padding: '20px',
              borderRadius: '12px',
              color: '#8e4e7e',
              fontWeight: '600',
              fontSize: '14px',
              overflow: 'auto',
              margin: '0',
              border: '2px solid #ffd4eb',
            }}>
              {cssCode}
            </pre>
          </div>
        )}
      </div>

      {}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lobster+Two&family=Quicksand:wght@400;600&display=swap');

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .btn {
          padding: 10px 20px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #e0c0c7 0%, #db6dcbff 100%);
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px #e47d9c54;
          display: flex;
          align-items: center;
          gap: 15px;
          font-family: 'Quicksand', sans-serif; 
        }
        
        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(244, 143, 177, 0.4);
        }

        .btn-small {
          padding: 6px 12px;
        }

        .btn-small:hover {
          transform: scale(1.1);
        }

        button:active, .btn:active {
          transform: scale(0.95) !important;
        }

        .select-control {
          padding: 8px 12px;
          border-radius: 10px;
          border: 2px solid #c7b9c5;
          background: #fff;
          color: #7bb0a8;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
          width: 100%; 
          font-family: 'Quicksand', sans-serif; 
        }
        
        .select-control:hover {
          border-color: #d45bbaff !important;
        }

        .select-control:focus {
          border-color: #1470adff !important;
          box-shadow: 0 0 5px rgba(70, 55, 206, 0.3);
        }

        .control-label {
          display: block;
          margin-bottom: 8px;
          color: #6198b1ff;
          font-weight: 600;
          font-size: 14px;
        }

        input[type="range"] {
          height: 6px;
          border-radius: 5px;
          background: #fce4ec;
        }

        input[type="range"]::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f48fb1 0%, #f06292 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(244, 143, 177, 0.4);
        }

        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f48fb1 0%, #f06292 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(244, 143, 177, 0.4);
          border: none;
        }
      `}</style>
    </div>
  );
}
