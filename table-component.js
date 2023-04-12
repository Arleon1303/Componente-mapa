import { LitElement, html, css } from "lit-element";

export class TableComponent extends LitElement {
  static get styles() {
    return css`
      .contenedor {
        min-width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    
      }

      .mesa {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 400px;
        min-height: 400px;
        border-radius: 100%;
        border: 1px solid black;
        position: relative
      }

      .contenedor .lugar {
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border: solid;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      lugares: { type: Number },
      mesa: { type: String },
      estaOcupado : {type: Boolean}
    };
  }

  constructor() {
    super();
    this.lugares = 8;
    this.mesa = "0";
  }
  pintarLugares(index, rotacion) {
    return html`<div
      style="transform: rotate(${rotacion}deg) translate(-17rem);"
      class="lugar lugar-${index + 1}"
    >
      <span style="transform: rotate(-${rotacion}deg)">${index + 1}</span>
    </div>`;
  }

  render() {
    let acum = 0;
    const arrayLugares = new Array(this.lugares).fill(0);
    return html`
      <div class="contenedor">

        <div class="mesa">
            
        <span>Mesa ${this.mesa}</span>
        ${arrayLugares.map((lugar, index, array) => {
          const distanciaAngulos = 360 / array.length;
          index === 0 ? (acum = 0) : (acum += distanciaAngulos);
          return this.pintarLugares(index, acum);
        })}</div>
        
      </div>
    `;
  }
}

window.customElements.define("table-component", TableComponent);
