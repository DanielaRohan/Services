import '../Style/content.scss';
import electric from '../asset/electric.png';
import gardener from '../asset/gardener1.png';
import beauty from '../asset/unghii.png';
import make from '../asset/make.png';
import courier from '../asset/courier.png';
import auto from '../asset/auto.png';
import accountancy from '../asset/accountancy.png';
import exteriorConstruction from '../asset/exteriorConstruction.png';
import interiorConstrcution from '../asset/interiorConstrcution.png';
import frontedDeveloper from '../asset/frontedDeveloper.png';
import lawyer from '../asset/lawyer.png';
import taxi from '../asset/taxi.png';
import machenary from '../asset/machenary.png';
import waiterss from '../asset/waiterss.png';
import masage from '../asset/masage.png';
import imobiliare from '../asset/imobiliare.png';
import confectioner from '../asset/confectioner.png';
import dj from '../asset/dj.png';
import arhitect from '../asset/arhitect.png';
import turistGhid from '../asset/turistGhid.png';
import cook1 from '../asset/cook1.png';
import curatenie from '../asset/curatenie.png';
import serviciBatrani from '../asset/serviciBatrani.png';
import vanzari from '../asset/vanzari.png';
import fitness from '../asset/fitness.png';

export const Content = function () {
    return (
        <div className="content">
            <figure>
                <nav>
                    <a href="/electircInstall">
                        <img src={electric} alt="img electric" />
                    </a>
                    <a href="/gardener">
                        <img src={gardener} alt="img gardener" />
                    </a>
                    <a href="/make-up">
                        <img src={beauty} alt="img beauty" />
                    </a>
                    <a href="/make-up">
                        <img src={make} alt="pic make-up" />
                    </a>
                    <a href="/driver">
                        <img src={courier} alt="courier" />
                    </a>
                    <a href="/auto-mechanic">
                        <img src={auto} alt="pic mechanic-auto" />
                    </a>
                    <a href="/accountacy">
                        <img src={accountancy} alt="pic accountacy" />
                    </a>
                    <a href="/building">
                        <img src={exteriorConstruction} alt="pic exteriorConstruction" />
                    </a>
                    <a href="/building">
                        <img src={interiorConstrcution} alt="pic interiorConstrcution" />
                    </a>
                    <a href="/fronted-developer">
                        <img src={frontedDeveloper} alt="pic frontedDeveloper" />
                    </a>
                    <a href="/lawyer">
                        <img src={lawyer} alt="pic lawyer" />
                    </a>
                    <a href="/driver">
                        <img src={taxi} alt="pic taxi" />
                    </a>
                    <a href="/machinery-rentals">
                        <img src={machenary} alt="pic machenary" />
                    </a>
                     <a href="/waiters">
                         <img src={waiterss} alt="pic waiters " />
                     </a>
                     <a href="">
                         <img src={imobiliare} alt="pic imobiliare " />
                     </a>
                     <a href="">
                         <img src={masage} alt="pic masage " />
                     </a>
                     <a href="/confectioner">
                         <img src={confectioner} alt="pic confectioner" />
                     </a>
                     <a href="">
                         <img src={dj} alt="pic dj" />
                     </a>
                     <a href="">
                         <img src={arhitect } alt="pic arhitect " />
                     </a>
                     <a href="/tourist-guide">
                         <img src={turistGhid } alt="pic turistGhid" />
                     </a>
                     <a href="/cook">
                         <img src={cook1} alt="pic cook" />
                     </a>
                     <a href="">
                         <img src={curatenie} alt="pic servicii" />
                     </a>
                     <a href="">
                         <img src={vanzari} alt="pic vanzari" />
                     </a>
                     <a href="">
                         <img src={serviciBatrani} alt="pic serviciiBatrani" />
                     </a>
                     <a href="">
                         <img src={fitness} alt="pic fitness" />
                     </a>

                </nav>
            </figure>
        </div>
    )
}