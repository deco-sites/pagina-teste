import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Nav1 from './Nav1.tsx'; 

const Rectangle2 = () => (
  <div className="rectangle_2 flex w-[1520px] h-[280px] text-white font-['Inter'] text-xl font-bold leading-[normal] rounded-[1.1875rem] border border-[#0093ff] bg-[#050B1D]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="item border-secondary rounded-lg overflow-hidden">
      <Nav1/>
      </div>
      <div class="item border-secondary rounded-lg overflow-hidden">
        <Nav1 />
      </div>
      <div class="item border-secondary rounded-lg overflow-hidden">
        <Nav1 />
      </div>
    </div>
  </div>
  );

export default Rectangle2;