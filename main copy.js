import {LitElement, html, css} from 'lit-element';

export class TemplateComponent extends LitElement {
  static get styles() {
    return css`
      :host{
        width: 50px;
        height: 50px;
      }
      .contenedor{
          position: relative;
          width: 40rem;
          height: 40rem;
          border-radius: 50%;
          margin: auto;
      }
      .contenedor div{
          position: absolute;
          top: 44%;
          left: 44%;
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px; 
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          border: solid;
          
          
      }
      .contenedor .mesa{
          width: 25rem;
          height: 25rem;
          top: 19%;
          left: 19%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
      }
          


      .deg0{
          transform: translate(17rem);

      }
          
      .deg36{
          transform: rotate(36deg) translate(17rem);
      }
      .deg72{
          transform: rotate(72deg) translate(17rem);
      }
      .deg108{
          transform: rotate(108deg) translate(17rem);
      }
      .deg144{
          transform: rotate(144deg) translate(17rem);
      }
      .deg180{
          transform: translate(-17rem);
          
      }
      .deg216{
          transform: rotate(216deg) translate(17rem);
      }
      .deg252{
          transform: rotate(252deg) translate(17rem);
      }
      .deg288{
          transform: rotate(288deg) translate(17rem);
      }
      .deg324{
          transform: rotate(324deg) translate(17rem);
          
      }
      .deg-216{
          transform: rotate(145deg);
      }
      .deg-252{
          transform: rotate(105deg);
      }
      .deg-288{
          transform: rotate(72deg);
      }
      .deg-324{
          transform: rotate(35deg);
      }
      .deg-36{
          transform: rotate(325deg);
      }
      .deg-72{
          transform: rotate(290deg);
      }
      .deg-108{
          transform: rotate(253deg);
      }
      .deg-144{
          transform: rotate(215deg);
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
    };
  }

  constructor() {
    super();
    
  }

  render() {
    return html`
      <div class="contenedor">
        <div class="deg0">
            <span class="deg-0">6</span>
        </div>
        <div class="deg36">
            <span class="deg-36">7</span>
        </div>
        <div class="deg72">
            <span class="deg-72">8</span>
        </div>
        <div class="deg108">
            <span class="deg-108">9</span>
        </div>
        <div class="deg144">
           <span class="deg-144">10</span> 
        </div>
        <div class="deg180">
            <span class="deg-180">1</span>
        </div>
        <div class="deg216">
            <span class="deg-216">2</span>
        </div>
        <div class="deg252">
            <span class="deg-252">3</span>
        </div>
        <div class="deg288">
            <span class="deg-288">4</span>
        </div>
        <div class="deg324">
            <span class="deg-324">5</span>
        </div>
        <div class="mesa">mesa</div>
    </div>
    `;
  }


}

window.customElements.define('compo-mesa', TemplateComponent);