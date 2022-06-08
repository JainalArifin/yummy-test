import StepItem from '../../molecules/StepItem';

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Technology
          <br />
          {' '}
          Frontend Developer
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem 
            icon="step1" 
            title="1. Web Dashboard" 
            desc1="HTML, CSS, JavaScript, Typescript, React.js" 
            desc2="Bit.dev, Redux, Redux-saga, Redux-thunk, Styled-component, Material-UI." />
          <StepItem 
            icon="step2" 
            title="2. Web Landing Page" 
            desc1="HTML, CSS, JavaScript, Typescript, Next.js" 
            desc2="Redux, Redux-saga, Redux-thunk, Styled-component, Material-UI." />
          <StepItem 
            icon="step3" 
            title="3. Mobile Hybrid" 
            desc1="React-Native" 
            desc2="Redux, Redux-saga, Redux-thunk, Styled-component, react-native-elements" />
        </div>
      </div>
    </section>
  );
}
