document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.fa').forEach(icon => {
    icon.classList.remove('fa', 'fas', 'far', 'fab', 'solitude');
    icon.classList.add('kf');
    const iconClass = icon.classList.item(1); // e.g., 'fa-home'
    const newIconClass = iconClass.replace('fa-', 'kf-'); // Replace 'fa-' with 'kf-'
    icon.classList.add(newIconClass);
  });
});
