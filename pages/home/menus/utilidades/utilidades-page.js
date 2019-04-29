function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}
exports.backTap = backTap;
