import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';

const Tex = ({children}) => {
    return (
        <BlockMath
        math={String(children)}
        errorColor={'#cc0000'}
      />
    );
}

export default Tex;