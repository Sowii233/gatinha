async function obterfrases() {
    const res = await fetch('frases.txt');
    const text = await res.text();
    return text.split('\n').filter(linha => linha.trim() !== '');
}

async function sorteio() {
    const frases = await obterfrases();
    const frase = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = frase;
}