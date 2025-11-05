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

  // header (separate from scrollable body so it never gets overlapped)
  const header = document.createElement('div');
  header.className = 'lk-modal-header';

  const titleEl = document.createElement('h2');
  titleEl.className = 'lk-modal-title';
  header.appendChild(titleEl);

  const close = document.createElement('button');
  close.className = 'modal-close';
  close.innerHTML = '✕';
  close.setAttribute('aria-label', 'Cerrar');
  close.title = 'Cerrar';
  close.addEventListener('click', () => closeModal());
  header.appendChild(close);

  modal.appendChild(header);
  // Place media above the header/body so modal reads like a card: image, title, content
  modal.appendChild(media);
  modal.appendChild(header);
  modal.appendChild(body);

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

  // If there's no media content, add a helper class so CSS can collapse the media column
  if (media.children.length === 0) {
    modal.classList.add('no-media');
  } else {
    modal.classList.remove('no-media');
  }

  // fill body
  body.innerHTML = '';
  // set title into the dedicated header title element
  const headerTitle = modal.querySelector('.lk-modal-title') as HTMLHeadingElement | null;
  const headerEl = modal.querySelector('.lk-modal-header') as HTMLDivElement | null;
  if (headerTitle) {
    headerTitle.textContent = opts.title || '';
    // hide header if no title provided
    if (headerEl) {
      if (!opts.title) headerEl.classList.add('no-title'); else headerEl.classList.remove('no-title');
    }
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
