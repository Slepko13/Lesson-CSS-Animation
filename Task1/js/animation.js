function createCards() {
    let x = 0;
    let y = 0;


    let cards = '';
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 13; j++) {



            cards += `
            <div class="">
              <div class="card">
                <div class="face" style="background: url('images/windows-playing-cards.png') ${x}px ${y}px;"></div>
                <div class="verso"></div>
              </div>
            </div>
            `;
            x += 73;

        }
        y += 98;
        x = 0;
    }
    document.getElementById('deck').innerHTML = cards;
}

document.addEventListener("DOMContentLoaded", createCards);