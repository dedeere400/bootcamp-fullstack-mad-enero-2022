const batteryPercentage = document.querySelector('.battery__percentage');;
const batteryStatus = document.querySelector('.battery__charge-status');
const batteryInfo = document.querySelector('.battery__charge-info');

function updateInterface(battery) {
    const batteryLevel = battery.level * 100;
    batteryPercentage.textContent = `${batteryLevel}%`;

    if (battery.charging === true) {
        batteryStatus.textContent = 'Battery charging';
        printBatteryWhenCharging();
    } if (battery.charging === false) {
        batteryStatus.textContet = 'Battery not charging'
        if (battery.dischargingTime === Infinity) {
            batteryStatus.textContet = 'Battery not charging'
            printBatteryWhenNotCharging(batteryLevel);
        } else {
            const secondsReimaining = battery.dischargingTime;
            const hours = Math.floor(secondsReimaining / 3600);
            const minutes = Math.floor((secondsReimaining - (hours * 3600)) / 60);
            batteryStatus.textContent = `${hours} hours and ${minutes} minutes of battery left`;
            printBatteryWhenNotCharging(batteryLevel);
        }
    }
}

function printBatteryWhenCharging() {
    const divs = document.querySelectorAll('.battery__bar');
    divs.forEach(d => d.remove());
    let batteryNum = 1;
    setInterval(() => {
        const batteryBar = document.createElement('div');
        batteryBar.classList.add('battery__bar', `battery__bar-${batteryNum}`);
        document.querySelector('.battery__bar-container').appendChild(batteryBar);
        batteryNum++;
        if (batteryNum > 6) {
            const divs = document.querySelectorAll('.battery__bar');
            divs.forEach(d => d.remove());
            batteryNum = 1;
        }
    }, 500)
}

function printBatteryWhenNotCharging(batteryLevel) {
    const divs = document.querySelectorAll('.battery__bar');
    divs.forEach(d => d.remove());
    for (let i = 1; i < 6; i++) {
        const batteryBar = document.createElement('div');
        batteryBar.classList.add('battery__bar', `battery__bar-${i}`);
        document.querySelector('.battery__bar-container').appendChild(batteryBar);
    }
    if (batteryLevel < 25) {
        batteryInfo.textContent = 'Low battery!'
        document.querySelector('.battery__img-container').style = `background-color: rgb(211, 61, 61);`
        document.querySelectorAll('.battery__bar').forEach(b => b.style = style = `border: 1px solid rgb(211, 61, 61);`)
        document.querySelector('.battery__bar-1').style.display = 'none';
        document.querySelector('.battery__bar-2').style.display = 'none';
        document.querySelector('.battery__bar-3').style.display = 'none';
        document.querySelector('.battery__bar-4').style.display = 'none';
    } else if (batteryLevel < 49) {
        document.querySelector('.battery__bar-1').style.display = 'none';
        document.querySelector('.battery__bar-2').style.display = 'none';
        document.querySelector('.battery__bar-3').style.display = 'none';
    } else if (batteryLevel < 75) {
        document.querySelector('.battery__bar-1').style.display = 'none';
        document.querySelector('.battery__bar-2').style.display = 'none';
    } else if (batteryLevel < 85) {
        document.querySelector('.battery__bar-1').style.display = 'none';
    }
}

navigator.getBattery().then((battery) => {
    console.log(battery.charging);
    updateInterface(battery);
    battery.addEventListener('chargingchange', () => updateInterface(battery));
    battery.addEventListener('levelchange', () => updateInterface(battery));
})