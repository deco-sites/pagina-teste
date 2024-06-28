import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Nav1 from './Nav1.tsx'; 

const Rectangle2 = () => (


/**  <div className="rectangle_2 flex-shrink-0 w-[783px] h-[1.5625rem] text-white font-['Inter'] text-xl font-bold leading-[normal] rounded-[1.1875rem] border border-[#0085ff] bg-[#050B1D]">
*/
  <div className="rectangle_2 flex-shrink-0 w-[1520px] h-[140px] text-white font-['Inter'] text-xl font-bold leading-[normal] rounded-[1.1875rem] border border-[#0093ff] bg-[#050B1D] display:flex justify-content:center">
  <Nav1 />
    <p>Um texto para preenchimento</p> {/* Add a paragraph */}
    <br /> {/* Add a line break */}
    <h1>Important Heading</h1> {/* Add a heading */}
    <p>Pàra testar a atualização do componente</p> {/* Another paragraph */}
    {/* You can add other HTML tags as needed */}
  </div>
);

export default Rectangle2;