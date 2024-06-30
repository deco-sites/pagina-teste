import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Nav1 from './Nav1.tsx'; 

const Rectangle2 = () => (
  <div className="rectangle_2 flex w-[1520px] h-[280px] text-white font-['Inter'] text-xl font-bold leading-[normal] rounded-[1.1875rem] border border-[#0093ff] bg-[#050B1D]">
    <div class="elementos_header flex flex-col items-center justify-center h-full">
      <div class="item border-secondary rounded-lg overflow-hidden">
        <img src="imagem.png" alt="Imagem" class="w-48 h-48 rounded-full mb-8">
      </div>
      <div class="item border-secondary rounded-lg overflow-hidden">
        <Nav1 class="flex gap-8"/>
      </div>
      <div class="item border-secondary rounded-lg overflow-hidden">
        <div class="flex flex-row gap-4 mt-8">
          <input type="text" class="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Pesquisar"/>
            <button type="button" class="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600">Pesquisar</button>
        </div>
      </div>
    </div>
  </div>
  );

export default Rectangle2;