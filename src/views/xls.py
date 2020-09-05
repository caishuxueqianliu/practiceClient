from xlutils.copy import copy #从xlutils模块导入copy
import xlrd
book1 = xlrd.open_workbook('stu.xls') #得到Excel文件的book对象，实例化对象
book2 = copy(book1) #拷贝一份原来的excel
sheet = book2.get_sheet(0) #获取第几个sheet页
sheet.write(1,3,0) #对拷贝的excel第2行，第4列数据为0
sheet.write(1,0,'小黑') #对拷贝的excel第2行，第1列数据为小黑
book2.save('stu.xls') #保存修改后excel