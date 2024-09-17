function updateData() {
    // تحديث البيانات كل ثانيتين (محاكاة)
    navigator.connection ? document.getElementById("ping").innerText = getPing() : document.getElementById("ping").innerText = "غير متاح";
    document.getElementById("cpu").innerText = getCPUUsage() + " %";
    document.getElementById("gpu").innerText = getGPUUsage() + " %";
    document.getElementById("ram").innerText = getRAMUsage() + " GB";
    document.getElementById("fps").innerText = getFPS() + " FPS";
    setTimeout(updateData, 2000); // تحديث البيانات كل ثانيتين
}

function getPing() {
    // محاكاة عملية قياس البينج
    return Math.floor(Math.random() * 100) + " ms";
}

function getCPUUsage() {
    // محاكاة استهلاك CPU
    return (Math.random() * 100).toFixed(2);
}

function getGPUUsage() {
    // محاكاة استهلاك GPU
    return (Math.random() * 100).toFixed(2);
}

function getRAMUsage() {
    // محاكاة استهلاك RAM
    return (Math.random() * 16).toFixed(2);
}

function getFPS() {
    // محاكاة عدد الإطارات
    return Math.floor(Math.random() * 144) + 30;
}

function optimizeConnection() {
    // محاكاة تحسين الاتصال
    alert("تم تحسين الاتصال");
}

function