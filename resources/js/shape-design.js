const heightObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        let mainSection = entry.target.parentNode;
        let contentHeight = entry.target.clientHeight + 'px';
        
        mainSection.style.setProperty('--content-height', contentHeight);
    }
})

