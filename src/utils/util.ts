// @ts-ignore
import ShowToastOptions = UniNamespace.ShowToastOptions

export const showToast = (title = '成功', icon = 'none', mask = true, duration = 1500) => {
  return uni.showToast({
    title,
    icon: icon as ShowToastOptions['icon'],
    mask,
    duration
  })
}
