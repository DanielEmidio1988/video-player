import Video from "./pages/video/Video"
import { createGlobalStyle } from "styled-components";

function App() {

  const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins'
  }`

  return (
    <>    
      <GlobalStyled/>
      <Video/>  
    </>
  );
}

export default App;
