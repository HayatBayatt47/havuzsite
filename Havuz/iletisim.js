// Menü panelini açma ve kapama
const menuIcon = document.getElementById('menuIcon');
const sidePanel = document.getElementById('sidePanel');
const closePanel = document.getElementById('closePanel');

menuIcon.addEventListener('click', function() {
    sidePanel.classList.toggle('open');
});

closePanel.addEventListener('click', function() {
    sidePanel.classList.remove('open');
});
