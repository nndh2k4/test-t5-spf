const parentCollapseBlocks = document.querySelectorAll('collapsible-block');

const setContentHeight = (item) => {
  const content = item.querySelector('.faq-section-content');
  if (!content) return;

  content.style.setProperty('--faq-content-height', `${content.scrollHeight}px`);
  content.classList.toggle('mb-20', item.classList.contains('active'));
}

const toggleItem = (item) => {
  item.classList.toggle('active');
  setContentHeight(item);
};

const onToggle = (e) => {
  const heading = e.target.closest('.collapsible-heading');
  if (!heading) return;

  const item = heading.closest('collapsible-block');
  if (!item) return;

  toggleItem(item);
}

parentCollapseBlocks.forEach((item) => {
  setContentHeight(item);
  item.addEventListener('click', onToggle);
});