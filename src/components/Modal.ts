import './Modal.css';

type ModalOpts = {
  title?: string;
  imgSrc?: string;
  html?: string; // contenido HTML adicional
}

let backdrop: HTMLDivElement | null = null;

function createBackdrop() {
  backdrop = document.createElement('div');
  backdrop.className = 'lk-modal-backdrop';

  const modal = document.createElement('div');
  modal.className = 'lk-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  // media column
  const media = document.createElement('div');
  media.className = 'modal-media';

  // body column
  const body = document.createElement('div');
  body.className = 'modal-body';

  const close = document.createElement('button');
  close.className = 'modal-close';
  close.innerHTML = '✕';
  close.setAttribute('aria-label', 'Cerrar');
  close.title = 'Cerrar';
  close.addEventListener('click', () => closeModal());

  modal.appendChild(media);
  modal.appendChild(body);
  modal.appendChild(close);

  backdrop.appendChild(modal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', handleKey);

  return backdrop;
}

function handleKey(e: KeyboardEvent) {
  if (e.key === 'Escape') closeModal();
}

export function openModal(opts: ModalOpts) {
  if (!backdrop) {
    createBackdrop();
  }
  if (!backdrop) return;

  const modal = backdrop.querySelector('.lk-modal') as HTMLDivElement;
  const media = modal.querySelector('.modal-media') as HTMLDivElement;
  const body = modal.querySelector('.modal-body') as HTMLDivElement;

  // fill media
  media.innerHTML = '';
  if (opts.imgSrc) {
    const img = document.createElement('img');
    img.src = opts.imgSrc;
    img.alt = opts.title || 'Imagen';
    media.appendChild(img);
  }

  // fill body
  body.innerHTML = '';
  if (opts.title) {
    const h2 = document.createElement('h2');
    h2.textContent = opts.title;
    body.appendChild(h2);
  }
  if (opts.html) {
    const div = document.createElement('div');
    div.innerHTML = opts.html;
    body.appendChild(div);
  }

  // attach to document
  document.body.appendChild(backdrop);
}

export function closeModal() {
  if (!backdrop) return;
  if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
  // allow recreation next time
  backdrop = null;
  document.removeEventListener('keydown', handleKey);
}

export default { openModal, closeModal };
