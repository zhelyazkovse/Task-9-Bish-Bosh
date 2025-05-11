const form = document.querySelector("#bishBoshForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const bish = parseInt(document.querySelector("#bish").value);
    const bosh = parseInt(document.querySelector("#bosh").value);
    const limit = parseInt(document.querySelector("#limit").value);

    const numbers = Array.from({ length: limit }, (_, i) => i + 1);

    const output = numbers.map(num => {
        if (num % bish === 0 && num % bosh === 0) return "Bish-Bosh";
        if (num % bish === 0) return "Bish";
        if (num % bosh === 0) return "Bosh";
        return num;
    }).join(" ");
    

    result.innerText = output;
});
