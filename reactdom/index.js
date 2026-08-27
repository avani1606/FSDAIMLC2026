const container=document.getElementById("container");
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'White'}},"Name: Avani Goel")
const h1=React.createElement('h1',{style:{color:'white', backgroundColor:'brown'}},"ABES Engineering College");
const h3=React.createElement('h3',{style:{color:'white'}},"B.Tech CSE-AIML 2026 Batch");
const img=React.createElement('img',{src:'https://png.pngtree.com/png-clipart/20241020/original/pngtree-woman-working-on-laptop---digital-illustration-clipart-png-image_16418182.png', style:{height:'100px', width:'100px'}})
const div=React.createElement('div',{style:{border:'4px solid red',width:'600px'}},img,h1,h2,h3);
root.render(div);