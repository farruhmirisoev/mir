Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","No results":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","All":"\u0412\u0441\u0435","New":"\u041d\u043e\u0432\u043e\u0435","Modules installed within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules added within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","Recent":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439","Modules enabled\/disabled within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435\/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules were enabled or disabled within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438.","@enabled of @total":"@enabled \u0438\u0437 @total","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Next":"\u0412\u043f\u0435\u0440\u0435\u0434","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Sunday":"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","Monday":"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","Tuesday":"\u0432\u0442\u043e\u0440\u043d\u0438\u043a","Wednesday":"\u0441\u0440\u0435\u0434\u0430","Thursday":"\u0447\u0435\u0442\u0432\u0435\u0440\u0433","Friday":"\u043f\u044f\u0442\u043d\u0438\u0446\u0430","Saturday":"\u0441\u0443\u0431\u0431\u043e\u0442\u0430","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","Year":"\u0413\u043e\u0434","1 hour":"@count \u0447\u0430\u0441","@count hours":"@count \u0447\u0430\u0441\u0430","1 day":"@count \u0434\u0435\u043d\u044c","@count days":"@count \u0434\u043d\u044f","This field is required.":"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.","Month":"\u041c\u0435\u0441\u044f\u0446","Prev":"\u041d\u0430\u0437\u0430\u0434","Day":"\u0414\u0435\u043d\u044c","Mon":"\u043f\u043d","Tue":"\u0432\u0442","Wed":"\u0441\u0440","Thu":"\u0447\u0442","Fri":"\u043f\u0442","Sat":"\u0441\u0431","Sun":"\u0432\u0441","January":"\u042f\u043d\u0432\u0430\u0440\u044c","February":"\u0424\u0435\u0432\u0440\u0430\u043b\u044c","March":"\u043c\u0430\u0440\u0442\u0430","April":"\u0430\u043f\u0440\u0435\u043b\u044f","May":"\u043c\u0430\u044f","June":"\u0438\u044e\u043d\u044f","July":"\u0418\u044e\u043b\u044c","August":"\u0430\u0432\u0433\u0443\u0441\u0442\u0430","September":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","October":"\u043e\u043a\u0442\u044f\u0431\u0440\u044f","November":"\u043d\u043e\u044f\u0431\u0440\u044f","December":"\u0434\u0435\u043a\u0430\u0431\u0440\u044f","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Today":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","Jan":"\u042f\u043d\u0432","Feb":"\u0424\u0435\u0432","Mar":"\u041c\u0430\u0440","Apr":"\u0410\u043f\u0440","Jun":"\u0418\u044e\u043d","Jul":"\u0418\u044e\u043b","Aug":"\u0410\u0432\u0433","Sep":"\u0421\u0435\u043d","Oct":"\u041e\u043a\u0442","Nov":"\u041d\u043e\u044f","Dec":"\u0414\u0435\u043a","Su":"\u0412\u0441","Mo":"\u041f\u043d","Tu":"\u0412\u0442","We":"\u0421\u0440","Th":"\u0427\u0442","Fr":"\u041f\u0442","Sa":"\u0421\u0431","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","1 year":"@count \u0433\u043e\u0434","@count years":"@count \u0433\u043e\u0434\u0430","1 week":"@count \u043d\u0435\u0434\u0435\u043b\u044f","@count weeks":"@count \u043d\u0435\u0434\u0435\u043b\u0438","mm\/dd\/yy":"mm\/dd\/yy","1 month":"@count \u043c\u0435\u0441\u044f\u0446","@count months":"@count \u043c\u0435\u0441\u044f\u0446\u0430","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Show layout designer":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043c\u0430\u043a\u0435\u0442\u0430","Hour":"\u0427\u0430\u0441","Minute":"\u041c\u0438\u043d\u0443\u0442\u0430","Second":"\u0421\u0435\u043a\u0443\u043d\u0434\u0430","Seconds":"\u0421\u0435\u043a\u0443\u043d\u0434","1 minute":"1 \u043c\u0438\u043d\u0443\u0442\u0430","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Log messages":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0441 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u043e\u0437\u043e\u043d\u0430 \u043e\u0442 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"\u0424\u0430\u0439\u043b %filename \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Do you want to refresh the current directory?":"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043f\u043a\u0443?","Delete selected files?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b?","Please select a thumbnail.":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443.","You must select at least %num files.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 %num \u0444\u0430\u0439\u043b\u043e\u0432.","You can not perform this operation.":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e.","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Change view":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0438\u0434","Week":"\u041d\u0435\u0434\u0435\u043b\u044f","Weeks":"\u041d\u0435\u0434\u0435\u043b\u0438","Days":"\u0414\u043d\u0435\u0439","Hours":"\u0427\u0430\u0441\u043e\u0432","Minutes":"\u041c\u0438\u043d\u0443\u0442","@count minutes":"@count \u043c\u0438\u043d\u0443\u0442\u044b","1 second":"1 \u0441\u0435\u043a\u0443\u043d\u0434\u0430","@count seconds":"@count \u0441\u0435\u043a\u0443\u043d\u0434\u044b","D":"D","W":"\u0417","Months":"\u041c\u0435\u0441\u044f\u0446\u044b","Years":"\u0413\u043e\u0434\u044b"}} };;

// bootstrap
Drupal.behaviors.jstimer = {
  attach: function(context) {
    Drupal.jstimer.countdown_auto_attach(
      new Array(
        new Drupal.jstimer.jst_timer()
      )
    );
  }
}

// Namespace for most of the javascript functions.
Drupal.jstimer = {};

// Array that holds all elements that need to be updated.
Drupal.jstimer.timer_stack = new Array();

// Attach all active widgets to their respective dom objects.
Drupal.jstimer.countdown_auto_attach = function (jstimer_active_widgets) {

  // Call .attach() on the active widget items.
  for (var i=0; i<jstimer_active_widgets.length; i++) {
    jstimer_active_widgets[i].attach();
  }

  // If you have any widget items, start the timing loop.
  if ( Drupal.jstimer.timer_stack.length > 0 ) {
    Drupal.jstimer.timer_loop();
  }

}

// The timing loop.
Drupal.jstimer.timer_loop = function() {
  // run backwards so we can remove items and not messup the loop data.
  for (var i = Drupal.jstimer.timer_stack.length - 1; i >= 0; i--) {
    if ( Drupal.jstimer.timer_stack[i].update() == false ) {
      Drupal.jstimer.timer_stack.splice(i, 1);
    }
  }

  // Stop the timer if there are not more timer items.
  if ( Drupal.jstimer.timer_stack.length > 0 ) {
    setTimeout('Drupal.jstimer.timer_loop()',999);
  }
}


/*
 * Timer widget
 */
Drupal.jstimer.formats = ['<em>(%dow% %moy%%day%)</em><br/>%days% days + %hours%:%mins%:%secs%','Only %days% days, %hours% hours, %mins% minutes and %secs% seconds left','%days% shopping days left','<em>(%dow% %moy%%day%)</em><br/>%days% days + %hours%:%mins%:%secs%'];

Drupal.jstimer.jst_timer = function() {
  this.selector = ".jst_timer";
  this.attach = function() {
    jQuery(this.selector).each(
      function(i) {  // i is the position in the each fieldset
        var t = new Drupal.jstimer.jst_timer_item(jQuery(this));
        if ( t.parse_microformat_success == 1 ) {
          Drupal.jstimer.timer_stack[Drupal.jstimer.timer_stack.length] = t;
        }
      }
    );
  }
}

Drupal.jstimer.jst_timer_item = function(ele) {

  // class methods first so you can use them in the constructor.
  this.loadProps = function() {
    for (var prop in this.props) {
      var prop_selector = "span[class="+prop+"]";
      if ( this.element.children(prop_selector).length > 0 ) {
        this.props[prop] = this.element.children(prop_selector).html();
      }
    }

    if ( String(this.props['format_txt']).match("'") ) {
      this.props['format_txt'] = "<span style=\"color:red;\">Format may not contain single quotes(').</span>";
    }

    // format_txt overrides format_num.
    if ( this.props['format_txt'] != "" ) {
      this.outformat = this.props['format_txt'];
    } else {
      if (Drupal.jstimer.formats[this.props['format_num']] != undefined) {
        this.outformat = Drupal.jstimer.formats[this.props['format_num']];
      }
      else {
        this.outformat = Drupal.jstimer.formats[0];
      }
    }

  }

  this.parse_microformat = function() {

    // ajax calls re-run autoattach, make sure the selector is gone.
    if ( this.element.hasClass("jst_timer") ) {
      this.element.removeClass("jst_timer")
    }

    // If there is an interval, always use it.
    if ( this.props['interval'] != "" ) {
      var interval_val = parseInt(this.props['interval']);
      var date = new Date();
      this.to_date = date;
      this.to_date.setTime(date.getTime() + (interval_val*1000));
    } else {
      if ( this.props['datetime'] == "" ) {
        this.parse_microformat_success = 0;
        throw new Object({name:"NoDate",message:"Javascript Timer: Span with class=datetime not found within the timer span."});
      }
      var date = new Date();
      try {
        date.jstimer_set_iso8601_date(this.props['datetime']);
      }
      catch(e) {
        throw(e);
      }
      this.to_date = date;
      if ( this.props['current_server_time'] != "" ) {
        // this is a feedback time from the server to correct for small server-client time differences.
        // not used for normal block and node timers.
        var date_server = new Date();
        date_server.jstimer_set_iso8601_date(this.props['current_server_time']);
        var date_client = new Date();
        var adj = date_client.getTime() - date_server.getTime();
        // adjust target date to clients domain
        this.to_date.setTime(this.to_date.getTime() + adj);
      }
    }

    this.parse_microformat_success = 1;
  }



  this.update = function() {
    var now_date = new Date();
    var duration = this.get_duration(now_date, this.to_date);

    // If counting down and timer is completed, set timer complete statement, check for redirect, and end.
    if ( this.props['dir'] == "down" && duration.sign > 0 ) {

      // Set the timer complete statement.
      if (this.props['timer_complete_message'] != '') {
        this.element.html(this.props['timer_complete_message'] + '');
        // Clear message as we don't need to reset it again.
        this.props['timer_complete_message'] = '';
      }

      // If there is a complete message, alert it.
      if (this.props['tc_msg'] != '') {
        alert(this.props['tc_msg']);
        // Clear alert msg as we don't need to alert it again.
        this.props['tc_msg'] = '';
      }

      // If there is a redirect url and delay has been met, redirect.
      if (this.props['tc_redir'] != '' && (duration.diff >= this.props['tc_redir_delay'])) {
      	if (this.props['tc_redir'].match('<reload>')) {
      		window.location.reload(true);
      	}
      	else {
        	window.location = this.props['tc_redir'];
        }
        return false;
      }
      // Timer is completed
      return true;
    }


    var outhtml = new String(this.outformat);

    // try to handle counts with units first, use a try block because Drupal.formatPlural breaks javascript sometimes
    try {
      outhtml = outhtml.replace(/%years% years/,  Drupal.formatPlural(duration.years, "1 year", "@count years"));
      outhtml = outhtml.replace(/%ydays% days/,   Drupal.formatPlural(duration.days, "1 day", "@count days"));
      outhtml = outhtml.replace(/%days% days/,    Drupal.formatPlural(duration.tot_days, "1 day", "@count days"));
      outhtml = outhtml.replace(/%hours% hours/,  Drupal.formatPlural(duration.hours, "1 hour", "@count hours"));
      outhtml = outhtml.replace(/%mins% minutes/, Drupal.formatPlural(duration.minutes, "1 minute", "@count minutes"));
      outhtml = outhtml.replace(/%secs% seconds/, Drupal.formatPlural(duration.seconds, "1 second", "@count seconds"));
      outhtml = outhtml.replace(/%months% months/, Drupal.formatPlural(duration.months, "1 month", "@count months"));
      outhtml = outhtml.replace(/%tot_months% months/, Drupal.formatPlural(duration.tot_months, "1 month", "@count months"));
    }
    catch(e){
      // suppress errors
    }

    //handle counts without units
    outhtml = outhtml.replace(/%years%/, duration.years);
    outhtml = outhtml.replace(/%ydays%/, duration.days);
    outhtml = outhtml.replace(/%days%/, duration.tot_days);
    outhtml = outhtml.replace(/%hours%/, LZ(duration.hours));
    outhtml = outhtml.replace(/%mins%/, LZ(duration.minutes));
    outhtml = outhtml.replace(/%secs%/, LZ(duration.seconds));
    outhtml = outhtml.replace(/%hours_nopad%/, duration.hours);
    outhtml = outhtml.replace(/%mins_nopad%/, duration.minutes);
    outhtml = outhtml.replace(/%secs_nopad%/, duration.seconds);
    outhtml = outhtml.replace(/%sign%/, duration.sign < 0 ? '-' : '+');
    outhtml = outhtml.replace(/%months%/, duration.months);
    outhtml = outhtml.replace(/%tot_months%/, duration.tot_months);

    // Proximity styling.
    if (this.props['highlight'][0] != undefined && this.props['highlight'][0] != '' && this.props['dir'] == "down" && (duration.diff <= (this.props['threshold'] * 60))) {
      this.element.html('<span ' + this.props['highlight'][0] + '=' + this.props['highlight'][1] + '>' +  outhtml + '</span>');
    } else {
      this.element.html(outhtml);
    }

    return true;
  }

  this.get_duration = function(now, target) {
    var dur = {diff:0, sign:0, years:0, months:0, days:0, hours:0, minutes:0, seconds:0, tot_months:0, tot_days:0};
    dur.diff = Math.floor((now.getTime() - target.getTime()) / 1000);
    if ( dur.diff < 0 ) {
      dur.sign = -1;
      dur.diff = Math.abs(dur.diff);
    } else {
      dur.sign = 1;
    }

    dur.years = Math.floor(dur.diff / 60 / 60 / 24 / 365.25);

    // Use calendar months, using months based on seconds is problematic.
    if(now.getFullYear() == target.getFullYear()) {
       dur.tot_months = Math.abs(target.getMonth() - now.getMonth());
       dur.months = dur.tot_months;
    } else {
      dur.tot_months = 11 - now.getMonth();
      dur.tot_months += target.getMonth() + 1;
      dur.tot_months += (target.getFullYear() - now.getFullYear() - 1) * 12;
      dur.months = dur.tot_months - (dur.years * 12);
    }

    dur.tot_days = Math.floor(dur.diff / 60 / 60 / 24);
    dur.days = Math.ceil(dur.tot_days - (dur.years * 365.25));
    dur.hours = Math.floor(dur.diff / 60 / 60) - (dur.tot_days * 24);
    dur.minutes = Math.floor(dur.diff / 60) - (dur.hours * 60) - (dur.tot_days * 24 * 60);
    dur.seconds = dur.diff - (dur.minutes * 60) - (dur.hours * 60 * 60) - (dur.tot_days * 24 * 60 * 60);
    return dur;
  }



  // begin constructor
  this.element = ele;

  // Defaults for each timer.
  this.props = {
    datetime: '',
    dir: 'down',
    format_num: 0,
    format_txt: '',
    timer_complete_message: new String('<em>Timer Completed</em>'),
    highlight: new String('style="color:red"').split(/=/),
    threshold: new Number('5'),
    tc_redir: new String(''),
    tc_redir_delay: new Number('3'),
    tc_msg: new String(''),
    interval: '',
    current_server_time: ''
  };
  this.loadProps();


  /* bootstrap, parse microformat, load object */
  try {
    this.parse_microformat();
  }
  catch(e) {
    alert(e.message);
    alert(jQuery(ele).html());
    this.parse_microformat_success = 0;
    return;
  }

  // replace the static stuff in the format string
  // this only needs to be done once, so here is a good spot.
  this.outformat = this.outformat.replace(/%day%/,   this.to_date.getDate());
  this.outformat = this.outformat.replace(/%month%/, this.to_date.getMonth() + 1);
  this.outformat = this.outformat.replace(/%year%/,  this.to_date.getFullYear());
  this.outformat = this.outformat.replace(/%moy%/,   this.to_date.jstimer_get_moy());
  this.outformat = this.outformat.replace(/%dow%/,   this.to_date.jstimer_get_dow());
}
// End of timer widget.





// Util functions
function LZ(x) {
  return (x >= 10 || x < 0 ? "" : "0") + x;
}

// iso8601 date parsing routines.  Extends the built-in javascript date object.
Date.prototype.jstimer_set_iso8601_date = function (string) {
  var iso8601_re = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:[T ](\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
  var date_bits = iso8601_re.exec(string);
  var date_obj = null;
  if ( date_bits ) {
    date_bits.shift();
    date_bits[1] && date_bits[1]--; // normalize month
    date_bits[6] && (date_bits[6] *= 1000); // convert mils
    date_obj = new Date(date_bits[0]||1970, date_bits[1]||0, date_bits[2]||0, date_bits[3]||0, date_bits[4]||0, date_bits[5]||0, date_bits[6]||0);

    //timezone handling
    var zone_offset = 0;  // in minutes
    var zone_plus_minus = date_bits[7] && date_bits[7].charAt(0);
    // get offset from isostring time to Z time
    if ( zone_plus_minus != 'Z' ) {
      zone_offset = ((date_bits[8] || 0) * 60) + (Number(date_bits[9]) || 0);
      if ( zone_plus_minus != '-' ) {
        zone_offset *= -1;
      }
    }
    // convert offset to localtime offset, will include daylight savings
    if ( zone_plus_minus ) {
      zone_offset -= date_obj.getTimezoneOffset();
    }
    if ( zone_offset ) {
      date_obj.setTime(date_obj.getTime() + zone_offset * 60000);
    }
  }

  // set this object to current localtime representation
  try {
    this.setTime(date_obj.getTime());
  }
  catch(e) {
    throw new Object({name:"DatePatternFail",message:"jstimer: Date does not have proper format (ISO8601, see readme.txt)."});
  }
}
Date.prototype.jstimer_get_moy = function () {
  var myMonths=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
  return myMonths[this.getMonth()];
}
Date.prototype.jstimer_get_dow = function () {
  var myDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  return myDays[this.getDay()];
}
;
(function ($) {

/**
 * Attaches double-click behavior to toggle full path of Krumo elements.
 */
Drupal.behaviors.devel = {
  attach: function (context, settings) {

    // Add hint to footnote
    $('.krumo-footnote .krumo-call').once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="' + settings.basePath + 'misc/help.png"/>');

    var krumo_name = [];
    var krumo_type = [];

    function krumo_traverse(el) {
      krumo_name.push($(el).html());
      krumo_type.push($(el).siblings('em').html().match(/\w*/)[0]);

      if ($(el).closest('.krumo-nest').length > 0) {
        krumo_traverse($(el).closest('.krumo-nest').prev().find('.krumo-name'));
      }
    }

    $('.krumo-child > div:first-child', context).dblclick(
      function(e) {
        if ($(this).find('> .krumo-php-path').length > 0) {
          // Remove path if shown.
          $(this).find('> .krumo-php-path').remove();
        }
        else {
          // Get elements.
          krumo_traverse($(this).find('> a.krumo-name'));

          // Create path.
          var krumo_path_string = '';
          for (var i = krumo_name.length - 1; i >= 0; --i) {
            // Start element.
            if ((krumo_name.length - 1) == i)
              krumo_path_string += '$' + krumo_name[i];

            if (typeof krumo_name[(i-1)] !== 'undefined') {
              if (krumo_type[i] == 'Array') {
                krumo_path_string += "[";
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += krumo_name[(i-1)];
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += "]";
              }
              if (krumo_type[i] == 'Object')
                krumo_path_string += '->' + krumo_name[(i-1)];
            }
          }
          $(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">' + krumo_path_string + '</div>');

          // Reset arrays.
          krumo_name = [];
          krumo_type = [];
        }
      }
    );
  }
};

})(jQuery);
;
/**
 * @file
 * Implement a simple, clickable dropbutton menu.
 *
 * See dropbutton.theme.inc for primary documentation.
 *
 * The javascript relies on four classes:
 * - The dropbutton must be fully contained in a div with the class
 *   ctools-dropbutton. It must also contain the class ctools-no-js
 *   which will be immediately removed by the javascript; this allows for
 *   graceful degradation.
 * - The trigger that opens the dropbutton must be an a tag wit hthe class
 *   ctools-dropbutton-link. The href should just be '#' as this will never
 *   be allowed to complete.
 * - The part of the dropbutton that will appear when the link is clicked must
 *   be a div with class ctools-dropbutton-container.
 * - Finally, ctools-dropbutton-hover will be placed on any link that is being
 *   hovered over, so that the browser can restyle the links.
 *
 * This tool isn't meant to replace click-tips or anything, it is specifically
 * meant to work well presenting menus.
 */

(function ($) {
  Drupal.behaviors.CToolsDropbutton = {
    attach: function() {
      // Process buttons. All dropbuttons are buttons.
      $('.ctools-button')
        .once('ctools-button')
        .removeClass('ctools-no-js');

      // Process dropbuttons. Not all buttons are dropbuttons.
      $('.ctools-dropbutton').once('ctools-dropbutton', function() {
        var $dropbutton = $(this);
        var $button = $('.ctools-content', $dropbutton);
        var $secondaryActions = $('li', $button).not(':first');
        var $twisty = $(".ctools-link", $dropbutton);
        var open = false;
        var hovering = false;
        var timerID = 0;

        var toggle = function(close) {
          // if it's open or we're told to close it, close it.
          if (open || close) {
            // If we're just toggling it, close it immediately.
            if (!close) {
              open = false;
              $secondaryActions.slideUp(100);
              $dropbutton.removeClass('open');
            }
            else {
              // If we were told to close it, wait half a second to make
              // sure that's what the user wanted.
              // Clear any previous timer we were using.
              if (timerID) {
                clearTimeout(timerID);
              }
              timerID = setTimeout(function() {
                if (!hovering) {
                  open = false;
                  $secondaryActions.slideUp(100);
                  $dropbutton.removeClass('open');
                }}, 500);
            }
          }
          else {
            // open it.
            open = true;
            $secondaryActions.animate({height: "show", opacity: "show"}, 100);
            $dropbutton.addClass('open');
          }
        }
        // Hide the secondary actions initially.
        $secondaryActions.hide();

        $twisty.click(function() {
            toggle();
            return false;
          });

        $dropbutton.hover(
          function() {
            hovering = true;
          }, // hover in
          function() { // hover out
            hovering = false;
            toggle(true);
            return false;
          }
        );
      });
    }
  }
})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function($){
/**
 * To make a form auto submit, all you have to do is 3 things:
 *
 * ctools_add_js('auto-submit');
 *
 * On gadgets you want to auto-submit when changed, add the ctools-auto-submit
 * class. With FAPI, add:
 * @code
 *  '#attributes' => array('class' => array('ctools-auto-submit')),
 * @endcode
 *
 * If you want to have auto-submit for every form element,
 * add the ctools-auto-submit-full-form to the form. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-full-form')),
 * @endcode
 *
 * If you want to exclude a field from the ctool-auto-submit-full-form auto submission,
 * add the class ctools-auto-submit-exclude to the form element. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-exclude')),
 * @endcode
 *
 * Finally, you have to identify which button you want clicked for autosubmit.
 * The behavior of this button will be honored if it's ajaxy or not:
 * @code
 *  '#attributes' => array('class' => array('ctools-use-ajax', 'ctools-auto-submit-click')),
 * @endcode
 *
 * Currently only 'select', 'radio', 'checkbox' and 'textfield' types are supported. We probably
 * could use additional support for HTML5 input types.
 */

Drupal.behaviors.CToolsAutoSubmit = {
  attach: function(context) {
    // 'this' references the form element
    function triggerSubmit (e) {
      var $this = $(this);
      if (!$this.hasClass('ctools-ajaxing')) {
        $this.find('.ctools-auto-submit-click').click();
      }
    }

    // the change event bubbles so we only need to bind it to the outer form
    $('form.ctools-auto-submit-full-form', context)
      .add('.ctools-auto-submit', context)
      .filter('form, select, input:not(:text, :submit)')
      .once('ctools-auto-submit')
      .change(function (e) {
        // don't trigger on text change for full-form
        if ($(e.target).is(':not(:text, :submit, .ctools-auto-submit-exclude)')) {
          triggerSubmit.call(e.target.form);
        }
      });

    // e.keyCode: key
    var discardKeyCode = [
      16, // shift
      17, // ctrl
      18, // alt
      20, // caps lock
      33, // page up
      34, // page down
      35, // end
      36, // home
      37, // left arrow
      38, // up arrow
      39, // right arrow
      40, // down arrow
       9, // tab
      13, // enter
      27  // esc
    ];
    // Don't wait for change event on textfields
    $('.ctools-auto-submit-full-form input:text, input:text.ctools-auto-submit', context)
      .filter(':not(.ctools-auto-submit-exclude)')
      .once('ctools-auto-submit', function () {
        // each textinput element has his own timeout
        var timeoutID = 0;
        $(this)
          .bind('keydown keyup', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID && clearTimeout(timeoutID);
            }
          })
          .keyup(function(e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          })
          .bind('change', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          });
      });
  }
}
})(jQuery);
;
(function ($) {

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');
  this.displayWeight = null;

  // React to columns change to avoid making checks in the scroll callback.
  this.originalTable.bind('columnschange', function (e, display) {
    // This will force header size to be calculated on scroll.
    self.widthCalculated = (self.displayWeight !== null && self.displayWeight === display);
    self.displayWeight = display;
  });

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    var $that = null;
    var $stickyCell = null;
    var display = null;
    var cellWidth = null;
    // Resize header and its cell widths.
    // Only apply width to visible table cells. This prevents the header from
    // displaying incorrectly when the sticky header is no longer visible.
    for (var i = 0, il = this.originalHeaderCells.length; i < il; i += 1) {
      $that = $(this.originalHeaderCells[i]);
      $stickyCell = this.stickyHeaderCells.eq($that.index());
      display = $that.css('display');
      if (display !== 'none') {
        cellWidth = $that.css('width');
        // Exception for IE7.
        if (cellWidth === 'auto') {
          cellWidth = $that[0].clientWidth + 'px';
        }
        $stickyCell.css({'width': cellWidth, 'display': display});
      }
      else {
        $stickyCell.css('display', 'none');
      }
    }
    this.stickyTable.css('width', this.originalTable.outerWidth());
  }
};

})(jQuery);
;
