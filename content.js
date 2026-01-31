// 添加倍速选项的核心函数
function addSpeedOptions() {
  const speedMenu = document.querySelector('ul.bpx-player-ctrl-playbackrate-menu');
  if (speedMenu) {
    // 定义要添加的倍速选项，按从大到小排序
    const speeds = [16, 8, 4, 3];
    let addedCount = 0;
    
    // 先移除已有的倍速选项，以便重新排序
    speeds.forEach(speed => {
      const existingSpeed = speedMenu.querySelector(`li[data-value="${speed}"]`);
      if (existingSpeed) {
        existingSpeed.remove();
      }
    });
    
    // 找到2.0x选项的位置，在其前面插入新选项
    const twoXOption = speedMenu.querySelector('li[data-value="2"]');
    
    speeds.forEach(speed => {
      const newItem = document.createElement('li');
      newItem.className = 'bpx-player-ctrl-playbackrate-menu-item';
      newItem.dataset.value = speed;
      newItem.textContent = `${speed}.0x`;
      
      // 在2.0x选项前面插入
      if (twoXOption) {
        speedMenu.insertBefore(newItem, twoXOption);
      } else {
        // 如果找不到2.0x选项，就添加到开头
        speedMenu.insertBefore(newItem, speedMenu.firstChild);
      }
      addedCount++;
    });
    
    if (addedCount > 0) {
      console.log(`✅ 已成功添加${addedCount}个倍速选项: ${speeds.join('.0x, ')}`);
      console.log(`✅ 倍速选项已按从大到小顺序排列`);
    }
    return true;
  }
  return false;
}

// 监听DOM变化，处理动态加载的情况
const observer = new MutationObserver(() => {
  if (addSpeedOptions()) {
    observer.disconnect(); // 完成后停止监听
  }
});

// 启动监听
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// 初始检查一次
addSpeedOptions();