const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML =`
        <div class='color'>
            <table style="border: 2px solid #000;">
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                 <tr>
                    <td>${e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
});