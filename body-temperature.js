auto.waitFor();
device.wakeUp();
sleep(500);
swipe(500,2000,500,1000,210);
let password='021642';
for(let i = 0; i < password.length; i++)
{
    let p = text(password[i].toString()).findOne().bounds();
    click(p.centerX(), p.centerY());
    sleep(100);
}
launchApp('iGoer');
id('tab_apps').findOne().click();
id('app_grid_all').findOne().click();
desc('行政工具').findOne().click();
sleep(500);
drawingOrder(18).findOne().click();
sleep(500)
if (new Date().getHours() < 12) {
    setClip('36.5');
    id('temperaturePm').findOne().child(0).child(1).click();
    id('temperatureAm').findOne().child(0).child(1).paste();
    toast('上午体温填报成功');
} else {
    setClip('36.5');
    id('temperaturePm').findOne().child(0).child(1).click();
    id('temperaturePm').findOne().child(0).child(1).paste();
    toast('下午体温填报成功')
}
sleep(500)
text('提交').findOne().parent().click();