async function createToast(container: any, toastService: any) {
  container.clear();
  const { ToastComponent } = await import('@/utils/toast.component');
  let toastParams = container.createComponent(ToastComponent);
  toastParams.instance.toasts = toastService.toasts;
  toastParams.instance.container = container;
}

export default createToast;
