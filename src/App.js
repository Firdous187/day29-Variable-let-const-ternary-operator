import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';
import LConst from './components/LConst';


function App() {
  return (
    <div>
      <p>Ternary operator</p>
     <LConst
            StudentName="Firdous" 
            engMarks="99"
            telMarks="88"
            sciMarks="65"
            socMarks="88"
            mathMarks="99"/>
  
     <LConst
            StudentName="Unnisa" 
            engMarks="77"
            telMarks="66"
            sciMarks="65"
            socMarks="1"
            mathMarks="98"/>

<LConst
            StudentName="Begum" 
            engMarks="66"
            telMarks="55"
            sciMarks="45"
            socMarks="8"
            mathMarks="0"/>
      <MarkSheet
      
      StudentName="hero" 
      engMarks="70"
      telMarks="55"
      sciMarks="45"
      socMarks="8"
      mathMarks="0"/>
     <p> Here we  are trying to import the statement</p>
      <p>IN this we are learning  Let--*changeable variable-we can change as many times that we can. const--*unchangeable variable, , we cant change this variable. if we want change this variable it shows an error. once it decared it caant be changeable</p>
      
      <MarkSheet/>
      <p>Normally by using html, css we create like this</p>
      <p>Today IN this lesson we are going to know about the Variabe and ternary operator.</p>
      <p> Here we directly assigneming in the marksheet in maim js folder</p>
      <MarkSheet 
       StudentName="Firdous" 
       engMarks="98"
       telMarks="88"
       sciMarks="65"
       socMarks="88"
       mathMarks="99"
       />
     
      
    </div>
  );
}

export default App;
