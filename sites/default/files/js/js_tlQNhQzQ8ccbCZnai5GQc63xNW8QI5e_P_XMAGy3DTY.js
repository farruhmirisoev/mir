Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","No results":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","All":"\u0412\u0441\u0435","New":"\u041d\u043e\u0432\u043e\u0435","Modules installed within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules added within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","Recent":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439","Modules enabled\/disabled within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435\/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules were enabled or disabled within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438.","@enabled of @total":"@enabled \u0438\u0437 @total","Also allow !name role to !permission?":"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0440\u043e\u043b\u0438 !name \u043f\u0440\u0430\u0432\u0430 !permission?","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","This field is required.":"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Show layout designer":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043c\u0430\u043a\u0435\u0442\u0430","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u044d\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Log messages":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0441 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u043e\u0437\u043e\u043d\u0430 \u043e\u0442 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"\u0424\u0430\u0439\u043b %filename \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Do you want to refresh the current directory?":"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043f\u043a\u0443?","Delete selected files?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b?","Please select a thumbnail.":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443.","You must select at least %num files.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 %num \u0444\u0430\u0439\u043b\u043e\u0432.","You can not perform this operation.":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e.","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Change view":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0438\u0434"}} };;
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
(function($) {

	/**
	 * @class  File manager (main controller)
	 * @author dio dio@std42.ru
	 **/
	elFinder = function(el, o) {
		var self = this, id;
		
		this.log = function(m) {
			window.console && window.console.log && window.console.log(m);
		}
		/**
		 * Object. File manager configuration
		 **/
		this.options = $.extend({}, this.options, o||{});
		
		if (!this.options.url) {
			alert('Invalid configuration! You have to set URL option.');
			return;
		}
		
		/**
		 * String. element id, create random if not set;
		 **/
		this.id = '';
		if ((id = $(el).attr('id'))) {
			this.id = id;
		} else {
			// this.id = 'el-finder-'+Math.random().toString().substring(2);
		}
		
		/**
		 * String. Version number;
		 **/
		this.version  = '1.2';
		/**
		 * String. jQuery version;
		 **/
		this.jquery = $.fn.jquery.split('.').join('');

		/**
		 * Object. Current Working Dir info
		 **/
		this.cwd      = {};
		/**
		 * Object. Current Dir Content. Files/folders info
		 **/
		this.cdc      = {};
		/**
		 * Object. Buffer for copied files
		 **/
		this.buffer   = {};
		/**
		 * Array. Selected files IDs
		 **/
		this.selected = [];
		/**
		 * Array. Folder navigation history
		 **/
		this.history  = [];
		/**
		 * Boolean. Enable/disable actions
		 **/
		this.locked   = false;
		/**
		 * Number. Max z-index on page + 1, need for contextmenu and quicklook
		 **/
		this.zIndex = 2;
		/**
		 * DOMElement. jQueryUI dialog
		 **/
		this.dialog = null;
		/**
		 * DOMElement. For docked mode - place where fm is docked
		 **/
		this.anchor = this.options.docked ? $('<div/>').hide().insertBefore(el) : null;
		/**
		 * Object. Some options get from server
		 **/
		this.params = { dotFiles : false, arc : '', uplMaxSize : '' };
		this.vCookie = 'el-finder-view-'+this.id;
		this.pCookie = 'el-finder-places-'+this.id;
		this.lCookie = 'el-finder-last-'+this.id;
		/**
		 * Object. View. After init we can accessel as this.view.win
		 **/
		this.view = new this.view(this, el);
		/**
		 * Object. User Iterface. Controller for commands/buttons/contextmenu
		 **/
		this.ui = new this.ui(this);
		/**
		 * Object. Set/update events
		 **/
		this.eventsManager = new this.eventsManager(this);
		/**
		 * Object. Quick Look like in MacOS X :)
		 **/
		this.quickLook = new this.quickLook(this);

		/**
		 * Set/get cookie value
		 *
		 * @param  String  name  cookie name
		 * @param  String  value cookie value, null to unset
		 **/
		this.cookie = function(name, value) {
			if (typeof value == 'undefined') {
				if (document.cookie && document.cookie != '') {
					var i, c = document.cookie.split(';');
					name += '=';
					for (i=0; i<c.length; i++) {
						c[i] = $.trim(c[i]);
						if (c[i].substring(0, name.length) == name) {
							return decodeURIComponent(c[i].substring(name.length));
						}
					}
				}
				return '';
			} else {
				var d, o = $.extend({}, this.options.cookie);
				if (value===null) {
					value = '';
					o.expires = -1;
				}
				if (typeof(o.expires) == 'number') {
					d = new Date();
					d.setTime(d.getTime()+(o.expires * 24 * 60 * 60 * 1000));
					o.expires = d;
				}
				document.cookie = name+'='+encodeURIComponent(value)+'; expires='+o.expires.toUTCString()+(o.path ? '; path='+o.path : '')+(o.domain ? '; domain='+o.domain : '')+(o.secure ? '; secure' : '');
			}
		}

		/**
		 * Set/unset this.locked flag
		 *
		 * @param  Boolean  state
		 **/
		this.lock = function(l) {
			this.view.spinner((this.locked = l||false));
			this.eventsManager.lock = this.locked;
		}

		/**
		 * Set/unset lock for keyboard shortcuts
		 *
		 * @param  Boolean  state
		 **/
		this.lockShortcuts = function(l) {
			this.eventsManager.lock = !!l;
		}
		
		/**
		 * Set file manager view type (list|icons)
		 *
		 * @param  String  v  view name
		 **/
		this.setView = function(v) {
			if (v == 'list' || v == 'icons') {
				this.options.view = v;
				this.cookie(this.vCookie, v);
			}
		}
		
		/**
		 * make ajax request, show message on error, call callback on success
		 *
		 * @param  Object.  data for ajax request
		 * @param  Function  
		 * @param  Object   overrwrite some options 
		 */
		this.ajax = function(data, callback, options) {

			var opts = {
				url      : this.options.url,
				async    : true,
				type     : 'GET',
				data     : data,
				dataType : 'json',
				cache    : false,
				lock     : true,
				force    : false,
				silent   : false
			}
			if (typeof(options) == 'object') {
				opts = $.extend({}, opts, options);
			}
			if (!opts.silent) {
				opts.error = self.view.fatal;
			}
			opts.success = function(data) {
				opts.lock && self.lock();
				if (data) {
					data.debug && self.log(data.debug);
					if (data.error) {
						!opts.silent && self.view.error(data.error, data.errorData);
						if (!opts.force) {
							return;
						}
					}
					callback(data);

					delete data;
				}
				
			}
			opts.lock && this.lock(true);
			$.ajax(opts);
		}
		
		/**
		 * Load generated thumbnails in background
		 *
		 **/
		this.tmb = function() {
			this.ajax({cmd : 'tmb', current : self.cwd.hash}, function(data) {
				if (self.options.view == 'icons' && data.images && data.current == self.cwd.hash) {
					for (var i in data.images) {
						if (self.cdc[i]) {
							self.cdc[i].tmb = data.images[i];
							$('div[key="'+i+'"]>p', self.view.cwd).css('background', ' url("'+data.images[i]+'") 0 0 no-repeat');
						}
						
					}
					data.tmb && self.tmb();
				}
			}, {lock : false, silent : true});
		}
		
		/**
		 * Return folders in places IDs
		 *
		 * @return Array
		 **/
		this.getPlaces = function() {
			var pl = [], p = this.cookie(this.pCookie);
			if (p.length) {
				if (p.indexOf(':')!=-1) {
					pl = p.split(':');
				} else {
					pl.push(p);
				}
			}
			return pl;
		}
		
		/**
		 * Add new folder to places
		 *
		 * @param  String  Folder ID
		 * @return Boolean
		 **/
		this.addPlace = function(id) {
			var p = this.getPlaces();
			if ($.inArray(id, p) == -1) {
				p.push(id);
				this.savePlaces(p);
				return true;
			}
		}
		
		/**
		 * Remove folder from places
		 *
		 * @param  String  Folder ID
		 * @return Boolean
		 **/
		this.removePlace = function(id) {
			var p = this.getPlaces();
			if ($.inArray(id, p) != -1) {
				this.savePlaces($.map(p, function(o) { return o == id?null:o; }));
				return true;
			}
		}
		
		/**
		 * Save new places data in cookie
		 *
		 * @param  Array  Folders IDs
		 **/
		this.savePlaces = function(p) {
			this.cookie(this.pCookie, p.join(':'));
		}
		
		/**
		 * Update file manager content
		 *
		 * @param  Object  Data from server
		 **/
		this.reload = function(data) {
			var i;
			this.cwd = data.cwd;
			
			this.cdc = {};
			for (i=0; i<data.cdc.length ; i++) {
				if (data.cdc[i].hash && data.cdc[i].name) {
					this.cdc[data.cdc[i].hash] = data.cdc[i];
					this.cwd.size += data.cdc[i].size;
				}
			}

			if (data.tree) {
				this.view.renderNav(data.tree);
				this.eventsManager.updateNav();
			}

			this.updateCwd();
			
			/* tell connector to generate thumbnails */
			if (data.tmb && !self.locked && self.options.view == 'icons') {
				self.tmb();
			}
			/* have to select some files */
			if (data.select && data.select.length) {
				var l = data.select.length;
				while (l--) {
					this.cdc[data.select[l]] && this.selectById(data.select[l]);
				}
			}
			this.lastDir(this.cwd.hash);
			if (this.options.autoReload>0) {
				this.iID && clearInterval(this.iID);
				this.iID = setInterval(function() {	!self.locked && self.ui.exec('reload'); }, this.options.autoReload*60000);
			}
		}
		
		/**
		 * Redraw current directory
		 *
		 */
		this.updateCwd = function() {
			this.lockShortcuts(true);
			this.selected = [];
			this.view.renderCwd();
			this.eventsManager.updateCwd();
			this.view.tree.find('a[key="'+this.cwd.hash+'"]').trigger('select');
			this.lockShortcuts();
		}
		
		/**
		 * Execute after files was dropped onto folder
		 *
		 * @param  Object  drop event
		 * @param  Object  drag helper object
		 * @param  String  target folder ID
		 */
		this.drop = function(e, ui, target) {
			if (ui.helper.find('[key="'+target+'"]').length) {
				return self.view.error('Unable to copy into itself');
			}
			var ids = [];
			ui.helper.find('div:not(.noaccess):has(>label):not(:has(em[class="readonly"],em[class=""]))').each(function() {
				ids.push($(this).hide().attr('key'));
			});
		
			if (!ui.helper.find('div:has(>label):visible').length) {
				ui.helper.hide();
			}
			if (ids.length) {
				self.setBuffer(ids, e.shiftKey?0:1, target);
				if (self.buffer.files) {
					/* some strange jquery ui bug (in list view) */
					setTimeout(function() {self.ui.exec('paste'); self.buffer = {}}, 300);
				}
			} else {
				$(this).removeClass('el-finder-droppable');
			}
		}
		
		/**
		 * Return selected files data
		 *
		 * @param  Number  if set, returns only element with this index or empty object 
		 * @return Array|Object
		 */
		this.getSelected = function(ndx) {
			var i, s = [];
			if (ndx>=0) {
				return this.cdc[this.selected[ndx]]||{};
			}
			for (i=0; i<this.selected.length; i++) {
				this.cdc[this.selected[i]] && s.push(this.cdc[this.selected[i]]);
			}
			return s;
		}
		
		this.select = function(el, reset) {
			reset && $('.ui-selected', self.view.cwd).removeClass('ui-selected');
			el.addClass('ui-selected');
			self.updateSelect();
		}

		this.selectById = function(id) {
			var el = $('[key="'+id+'"]', this.view.cwd);
			if (el.length) {
				this.select(el);
				this.checkSelectedPos();
			}
		}

		this.unselect = function(el) {
			el.removeClass('ui-selected');
			self.updateSelect();
		}

		this.toggleSelect = function(el) {
			el.toggleClass('ui-selected');
			this.updateSelect();
		}

		this.selectAll = function() {
			$('[key]', self.view.cwd).addClass('ui-selected')
			self.updateSelect();
		}

		this.unselectAll = function() {
			$('.ui-selected', self.view.cwd).removeClass('ui-selected');
			self.updateSelect();
		}

		this.updateSelect = function() {
			self.selected = [];
			$('.ui-selected', self.view.cwd).each(function() {
				self.selected.push($(this).attr('key'));
			});
			self.view.selectedInfo();
			self.ui.update();
			self.quickLook.update();
		}

		/**
		 * Scroll selected element in visible position
		 *
		 * @param  Boolean  check last or first selected element?
		 */
		this.checkSelectedPos = function(last) {
			var s = self.view.cwd.find('.ui-selected:'+(last ? 'last' : 'first')).eq(0),
				p = s.position(),
				h = s.outerHeight(),
				ph = self.view.cwd.height();
			if (p.top < 0) {
				self.view.cwd.scrollTop(p.top+self.view.cwd.scrollTop()-2);
			} else if (ph - p.top < h) {
				self.view.cwd.scrollTop(p.top+h-ph+self.view.cwd.scrollTop());
			}
		}

		/**
		 * Add files to clipboard buffer
		 *
		 * @param  Array   files IDs
		 * @param  Boolean copy or cut files?
		 * @param  String  destination folder ID
		 */
		this.setBuffer = function(files, cut, dst) {
			var i, id, f;
			this.buffer = {
				src   : this.cwd.hash,
				dst   : dst,
				files : [],
				names : [],
				cut   : cut||0
			};
			
			for (i=0; i<files.length; i++) {
				id = files[i]; 
				f = this.cdc[id];
				if (f && f.read && f.type != 'link') {
					this.buffer.files.push(f.hash);
					this.buffer.names.push(f.name);
				}
			}
			
			if (!this.buffer.files.length) {
				this.buffer = {};
			}
		}
		
		/**
		 * Return true if file name is acceptable
		 *
		 * @param  String  file/folder name
		 * @return Boolean
		 */
		this.isValidName = function(n) {
			if (!this.cwd.dotFiles && n.indexOf('.') == 0) {
				return false;
			}
			return n.match(/^[^\\\/\<\>:]+$/);
		}
		
		/**
		 * Return true if file with this name exists
		 *
		 * @param  String  file/folder name
		 * @return Boolean
		 */
		this.fileExists = function(n) {
			for (var i in this.cdc) {
				if (this.cdc[i].name == n) {
					return i;
				}
			}
			return false;
		}
		
		/**
		 * Return name for new file/folder
		 *
		 * @param  String  base name (i18n)
		 * @param  String  extension for file
		 * @return String
		 */
		this.uniqueName = function(n, ext) {
			n = self.i18n(n);
			var name = n, i = 0, ext = ext||'';

			if (!this.fileExists(name+ext)) {
				return name+ext;
			}

			while (i++<100) {
				if (!this.fileExists(name+i+ext)) {
					return name+i+ext;
				}
			}
			return name.replace('100', '')+Math.random()+ext;
		}

		/**
		 * Get/set last opened dir
		 *
		 * @param  String  dir hash
		 * @return String
		 */
		this.lastDir = function(dir) {
			if (this.options.rememberLastDir) {
				return dir ? this.cookie(this.lCookie, dir) : this.cookie(this.lCookie);
			}
		}

		/**
		 * Resize file manager
		 *
		 * @param  Number  width
		 * @param  Number  height
		 */
		function resize(w, h) {
			w && self.view.win.width(w);
			h && self.view.nav.add(self.view.cwd).height(h);
		}
		
		/**
		 * Resize file manager in dialog window while it resize
		 *
		 */
		function dialogResize() {
			resize(null, self.dialog.height()-self.view.tlb.parent().height()-($.browser.msie ? 47 : 32))
		}

		this.time = function() {
			return new Date().getMilliseconds();
		}

		/* here we init file manager */
		
		this.setView(this.cookie(this.vCookie));
		resize(self.options.width, self.options.height);
		
		/* dialog or docked mode */
		if (this.options.dialog || this.options.docked) {
			this.options.dialog = $.extend({width : 570, dialogClass : '', minWidth : 480, minHeight: 330}, this.options.dialog || {});
			this.options.dialog.open = function() {  
				setTimeout(function() {
					$('<input type="text" value="f"/>').appendTo(self.view.win).focus().select().remove()
				}, 200)
				
			}
			this.options.dialog.dialogClass += 'el-finder-dialog';
			this.options.dialog.resize = dialogResize;
			if (this.options.docked) {
				/* docked mode - create dialog and store size */
				this.options.dialog.close = function() { self.dock(); };
				
				this.view.win.data('size', {width : this.view.win.width(), height : this.view.nav.height()});
			} else {
				this.options.dialog.close = function() { 
					self.destroy();
				}
				this.dialog = $('<div/>').append(this.view.win).dialog(this.options.dialog);
			}
		}

		this.ajax({ 
			cmd    : 'open', 
			target : this.lastDir()||'', 
			init   : true, 
			tree   : true 
			}, 
			function(data) {
				if (data.cwd) {
					self.eventsManager.init();
					self.reload(data);
					$.extend(self.params, data.params||{});

					$('*', document.body).each(function() {
						var z = parseInt($(this).css('z-index'));
						if (z >= self.zIndex) {
							self.zIndex = z+1;
						}
					});
					self.ui.init(data.disabled);
				}
				
		}, {force : true});
			
		
		this.open = function() {
			this.dialog ? this.dialog.dialog('open') : this.view.win.show();
			this.eventsManager.lock = false;
		}
		
		this.close = function() {
			this.quickLook.hide();
			if (this.options.docked && this.view.win.attr('undocked')) {
				this.dock();
			} else {
				this.dialog ? this.dialog.dialog('close') : this.view.win.hide();
			}
			this.eventsManager.lock = true;
		}
		
		this.destroy = function() {

			this.eventsManager.lock = true;
			this.quickLook.hide();
			this.quickLook.win.remove();
			if (this.dialog) {
				this.dialog.dialog('destroy');
				this.view.win.parent().remove();
			} else {
				this.view.win.remove();
			}
			this.ui.menu.remove();
		}
		
		this.dock = function() {
			if (this.options.docked && this.view.win.attr('undocked')) {
				this.quickLook.hide();
				var s =this.view.win.data('size');
				this.view.win.insertAfter(this.anchor).removeAttr('undocked');
				resize(s.width, s.height);
				this.dialog.dialog('destroy');
				this.dialog = null;
			}
		}
		
		this.undock = function() {
			if (this.options.docked && !this.view.win.attr('undocked')) {
				this.quickLook.hide();
				this.dialog = $('<div/>').append(this.view.win.css('width', '100%').attr('undocked', true).show()).dialog(this.options.dialog);
				dialogResize();
			} 
		}
	}
	
	/**
	 * Translate message into selected language
	 *
	 * @param  String  message in english
	 * @param  String  translated or original message
	 */
	elFinder.prototype.i18n = function(m) {
		return this.options.i18n[this.options.lang] && this.options.i18n[this.options.lang][m] ? this.options.i18n[this.options.lang][m] :  m;
	}
	
	/**
	 * Default config
	 *
	 */
	elFinder.prototype.options = {
		/* connector url. Required! */
		url            : '',
		/* interface language */
		lang           : 'en',
		/* additional css class for filemanager container */
		cssClass       : '',
		/* characters number to wrap file name in icons view. set to 0 to disable wrap */
		wrap           : 14,
		/* Name for places/favorites (i18n), set to '' to disable places */
		places         : 'Places',
		/* show places before navigation? */
		placesFirst    : true,
		/* callback to get file url (for wswing editors) */
		editorCallback : null,
		/* string to cut from file url begin before pass it to editorCallback. variants: '' - nothing to cut, 'root' - cut root url, 'http://...' - string if it exists in the beginig of url  */
		cutURL         : '',
		/* close elfinder after editorCallback */
		closeOnEditorCallback : true,
		/* i18 messages. not set manually! */
		i18n           : {},
		/* fm view (icons|list) */
		view           : 'icons',
		/* width to overwrite css options */
		width          : '',
		/* height to overwrite css options. Attenion! this is heigt of navigation/cwd panels! not total fm height */
		height         : '',
		/* disable shortcuts exclude arrows/space */
		disableShortcuts : false,
		/* open last visited dir after reload page or close and open browser */
		rememberLastDir : true,
		/* cookie options */
		cookie         : {
			expires : 30,
			domain  : '',
			path    : '/',
			secure  : false
		},
		/* buttons on toolbar */
		toolbar        : [
			['back', 'reload'],
			['select', 'open'],
			['mkdir', 'mkfile', 'upload'],
			['copy', 'paste', 'rm'],
			['rename', 'edit'],
			['info', 'quicklook', 'resize'],
			['icons', 'list'],
			['help']
		],
		/* contextmenu commands */
		contextmenu : {
			'cwd'   : ['reload', 'delim', 'mkdir', 'mkfile', 'upload', 'delim', 'paste', 'delim', 'info'],
			'file'  : ['select', 'open', 'quicklook', 'delim', 'copy', 'cut', 'rm', 'delim', 'duplicate', 'rename', 'edit', 'resize', 'archive', 'extract', 'delim', 'info'],
			'group' : ['select', 'copy', 'cut', 'rm', 'delim', 'archive', 'extract', 'delim', 'info']
		},
		/* jqueryUI dialog options */
		dialog : null,
		/* docked mode */
		docked : false,
		/* auto reload time (min) */
		autoReload : 0,
		/* set to true if you need to select several files at once from editorCallback */
		selectMultiple : false
	}

	
	$.fn.elfinder = function(o) {
		
		return this.each(function() {
			
			var cmd = typeof(o) == 'string' ? o : '';
			if (!this.elfinder) {
				this.elfinder = new elFinder(this, typeof(o) == 'object' ? o : {})
			}
			
			switch(cmd) {
				case 'close':
				case 'hide':
					this.elfinder.close();
					break;
					
				case 'open':
				case 'show':
					this.elfinder.open();
					break;
				
				case 'dock':
					this.elfinder.dock();
					break;
					
				case 'undock':
					this.elfinder.undock();
					break;
					
				case'destroy':
					this.elfinder.destroy();
					break;
			}
			
		})
	}
	
})(jQuery);
(function($) {
elFinder.prototype.view = function(fm, el) {
	var self = this;
	this.fm = fm;
	/**
	 * Object. Mimetypes to kinds mapping
	 **/
	this.kinds = {
		'unknown'                       : 'Unknown',
		'directory'                     : 'Folder',
		'symlink'                       : 'Alias',
		'symlink-broken'                : 'Broken alias',
		'application/x-empty'           : 'Plain text',
		'application/postscript'        : 'Postscript document',
		'application/octet-stream'      : 'Application',
		'application/vnd.ms-office'     : 'Microsoft Office document',
		'application/vnd.ms-word'       : 'Microsoft Word document',  
	    'application/vnd.ms-excel'      : 'Microsoft Excel document',
		'application/vnd.ms-powerpoint' : 'Microsoft Powerpoint presentation',
		'application/pdf'               : 'Portable Document Format (PDF)',
		'application/vnd.oasis.opendocument.text' : 'Open Office document',
		'application/x-shockwave-flash' : 'Flash application',
		'application/xml'               : 'XML document', 
		'application/x-bittorrent'      : 'Bittorrent file',
		'application/x-7z-compressed'   : '7z archive',
		'application/x-tar'             : 'TAR archive', 
	    'application/x-gzip'            : 'GZIP archive', 
	    'application/x-bzip2'           : 'BZIP archive', 
	    'application/zip'               : 'ZIP archive',  
	    'application/x-rar'             : 'RAR archive',
		'application/javascript'        : 'Javascript application',
		'text/plain'                    : 'Plain text',
	    'text/x-php'                    : 'PHP source',
		'text/html'                     : 'HTML document', 
		'text/javascript'               : 'Javascript source',
		'text/css'                      : 'CSS style sheet',  
	    'text/rtf'                      : 'Rich Text Format (RTF)',
		'text/rtfd'                     : 'RTF with attachments (RTFD)',
		'text/x-c'                      : 'C source', 
		'text/x-c++'                    : 'C++ source', 
		'text/x-shellscript'            : 'Unix shell script',
	    'text/x-python'                 : 'Python source',
		'text/x-java'                   : 'Java source',
		'text/x-ruby'                   : 'Ruby source',
		'text/x-perl'                   : 'Perl script',
	    'text/xml'                      : 'XML document', 
		'image/x-ms-bmp'                : 'BMP image',
	    'image/jpeg'                    : 'JPEG image',   
	    'image/gif'                     : 'GIF Image',    
	    'image/png'                     : 'PNG image',
		'image/x-targa'                 : 'TGA image',
	    'image/tiff'                    : 'TIFF image',   
	    'image/vnd.adobe.photoshop'     : 'Adobe Photoshop image',
		'audio/mpeg'                    : 'MPEG audio',  
		'audio/midi'                    : 'MIDI audio',
		'audio/ogg'                     : 'Ogg Vorbis audio',
		'audio/mp4'                     : 'MP4 audio',
		'audio/wav'                     : 'WAV audio',
		'video/x-dv'                    : 'DV video',
		'video/mp4'                     : 'MP4 video',
		'video/mpeg'                    : 'MPEG video',  
		'video/x-msvideo'               : 'AVI video',
		'video/quicktime'               : 'Quicktime video',
		'video/x-ms-wmv'                : 'WM video',   
		'video/x-flv'                   : 'Flash video',
		'video/x-matroska'              : 'Matroska video'
	}
	
	this.tlb = $('<ul />');

	this.nav = $('<div class="el-finder-nav"/>').resizable({handles : 'e', autoHide : true, minWidth : 200, maxWidth: 500});
	this.cwd = $('<div class="el-finder-cwd"/>').attr('unselectable', 'on');
	this.spn = $('<div class="el-finder-spinner"/>');
	this.err = $('<p class="el-finder-err"><strong/></p>').click(function() { $(this).hide(); });
	this.nfo = $('<div class="el-finder-stat"/>');
	this.pth = $('<div class="el-finder-path"/>');
	this.sel = $('<div class="el-finder-sel"/>');
	this.stb = $('<div class="el-finder-statusbar"/>')
		.append(this.pth)
		.append(this.nfo)
		.append(this.sel);
	this.wrz = $('<div class="el-finder-workzone" />')
		.append(this.nav)
		.append(this.cwd)
		.append(this.spn)
		.append(this.err)
		.append('<div style="clear:both" />');
	this.win = $(el).empty().attr('id', this.fm.id).addClass('el-finder '+(fm.options.cssClass||''))
		.append($('<div class="el-finder-toolbar" />').append(this.tlb))
		.append(this.wrz)
		.append(this.stb);

	this.tree = $('<ul class="el-finder-tree"></ul>').appendTo(this.nav);
	this.plc  = $('<ul class="el-finder-places"><li><a href="#" class="el-finder-places-root"><div/>'+this.fm.i18n(this.fm.options.places)+'</a><ul/></li></ul>').hide();

	this.nav[this.fm.options.placesFirst ? 'prepend' : 'append'](this.plc);

	/*
	 * Render ajax spinner
	*/
	this.spinner = function(show) {
		this.win.toggleClass('el-finder-disabled', show);
		this.spn.toggle(show);
	}
	
	/*
	 * Display ajax error
	*/
	this.fatal = function(t) {
		self.error(t.status != '404' ? 'Invalid backend configuration' : 'Unable to connect to backend')
	}
	
	/*
	 * Render error
	*/
	this.error = function(err, data) {
		this.fm.lock();
		this.err.show().children('strong').html(this.fm.i18n(err)+'!'+this.formatErrorData(data));
		setTimeout(function() { self.err.fadeOut('slow'); }, 4000);
	}
	
	/*
	 * Render navigation panel with dirs tree
	*/
	this.renderNav = function(tree) {
		var d = tree.dirs.length ? traverse(tree.dirs) : '',
			li = '<li><a href="#" class="el-finder-tree-root" key="'+tree.hash+'"><div'+(d ? ' class="collapsed expanded"' : '')+'/>'+tree.name+'</a>'+d+'</li>';
		this.tree.html(li);
		
		this.fm.options.places && this.renderPlaces();
		
		function traverse(tree) {
			var i, hash, c, html = '<ul style="display:none">';
			for (i=0; i < tree.length; i++) {
				if (!tree[i].name || !tree[i].hash) {
					continue;
				}
				c = '';
				if (!tree[i].read && !tree[i].write) {
					c = 'noaccess';
				} else if (!tree[i].read) {
					c = 'dropbox';
				} else if (!tree[i].write) {
					c = 'readonly';
				} 
				
				html += '<li><a href="#" class="'+c+'" key="'+tree[i].hash+'"><div'+(tree[i].dirs.length ? ' class="collapsed"' : '')+'/>'+tree[i].name+'</a>';

				if (tree[i].dirs.length) {
					html += traverse(tree[i].dirs);
				}
				html += '</li>';
			}
			return html +'</ul>';
		}
	}
	
	/*
	 * Render places
	*/
	this.renderPlaces = function() {
		var i, c, 
			pl = this.fm.getPlaces(),	
			ul = this.plc.show().find('ul').empty().hide();
		$('div:first', this.plc).removeClass('collapsed expanded');

		if (pl.length) {
			pl.sort(function(a, b) {
				var _a = self.tree.find('a[key="'+a+'"]').text()||'',
					_b = self.tree.find('a[key="'+b+'"]').text()||'';
				return _a.localeCompare(_b);
			});
			
			for (i=0; i < pl.length; i++) {
				if ((c = this.tree.find('a[key="'+pl[i]+'"]:not(.dropbox)').parent()) && c.length) {
					ul.append(c.clone().children('ul').remove().end().find('div').removeClass('collapsed expanded').end());
				} else {
					this.fm.removePlace(pl[i]);
				}
			};
			ul.children().length && $('div:first', this.plc).addClass('collapsed');
		}
	}
	
	/*
	 * Render current directory
	*/
	this.renderCwd = function() {
		this.cwd.empty();
		
		var num  = 0, size = 0, html = '';
		for (var hash in this.fm.cdc) {
			num++;
			size += this.fm.cdc[hash].size;
			html += this.fm.options.view == 'icons'
				? this.renderIcon(this.fm.cdc[hash])
				: this.renderRow(this.fm.cdc[hash], num%2);
		}
		if (this.fm.options.view == 'icons') {
			this.cwd.append(html);
		} else {
			this.cwd.append('<table><tr><th colspan="2">'+this.fm.i18n('Name')+'</th><th>'+this.fm.i18n('Permissions')+'</th><th>'+this.fm.i18n('Modified')+'</th><th class="size">'+this.fm.i18n('Size')+'</th><th>'+this.fm.i18n('Kind')+'</th></tr>'+html+'</table>');
		}
		
		this.pth.text(fm.cwd.rel);
		this.nfo.text(fm.i18n('items')+': '+num+', '+this.formatSize(size));
		this.sel.empty();
	}

	/*
	 * Render one file as icon
	*/
	this.renderIcon = function(f) {
		var str = '<p'+(f.tmb ? ' style="'+"background:url('"+f.tmb+"') 0 0 no-repeat"+'"' : '')+'/><label>'+this.formatName(f.name)+'</label>';
		if (f.link || f.mime == 'symlink-broken') {
			str += '<em/>';
		}
		if (!f.read && !f.write) {
			str += '<em class="noaccess"/>';
		} else if (f.read && !f.write) {
			str += '<em class="readonly"/>';
		} else if (!f.read && f.write) {
			str += '<em class="'+(f.mime == 'directory' ? 'dropbox' :'noread')+'" />';
		}
		return '<div class="'+this.mime2class(f.mime)+'" key="'+f.hash+'">'+str+'</div>';
	}

	/*
	 * Render one file as table row
	*/
	this.renderRow = function(f, odd) {
		var str = f.link || f.mime =='symlink-broken' ? '<em/>' : '';
		if (!f.read && !f.write) {
			str += '<em class="noaccess"/>';
		} else if (f.read && !f.write) {
			str += '<em class="readonly"/>';
		} else if (!f.read && f.write) {
			str += '<em class="'+(f.mime == 'directory' ? 'dropbox' :'noread')+'" />';
		}
		return '<tr key="'+f.hash+'" class="'+self.mime2class(f.mime)+(odd ? ' el-finder-row-odd' : '')+'"><td class="icon"><p>'+str+'</p></td><td>'+f.name+'</td><td>'+self.formatPermissions(f.read, f.write, f.rm)+'</td><td>'+self.formatDate(f.date)+'</td><td class="size">'+self.formatSize(f.size)+'</td><td>'+self.mime2kind(f.link ? 'symlink' : f.mime)+'</td></tr>';
	}

	/*
	 * Re-render file (after editing)
	*/
	this.updateFile = function(f) {
		var e = this.cwd.find('[key="'+f.hash+'"]');
		e.replaceWith(e[0].nodeName == 'DIV' ? this.renderIcon(f) : this.renderRow(f));
	}

	/*
	 * Update info about selected files
	*/
	this.selectedInfo = function() {
		var i, s = 0, sel;
		
		if (self.fm.selected.length) {
			sel = this.fm.getSelected();
			for (i=0; i<sel.length; i++) {
				s += sel[i].size;
			}
		}
		this.sel.text(i>0 ? this.fm.i18n('selected items')+': '+sel.length+', '+this.formatSize(s) : '');
	}

	/*
	 * Return wraped file name if needed
	*/
	this.formatName = function(n) {
		var w = self.fm.options.wrap;
		if (w>0) {
			if (n.length > w*2) {
				return n.substr(0, w)+"&shy;"+n.substr(w, w-5)+"&hellip;"+n.substr(n.length-3);
			} else if (n.length > w) {
				return n.substr(0, w)+"&shy;"+n.substr(w);
			}
		}
		return n;
	}

	/*
	 * Return error message
	*/
	this.formatErrorData = function(data) {
		var i, err = ''
		if (typeof(data) == 'object') {
			err = '<br />';
			for (i in data) {
				err += i+' '+self.fm.i18n(data[i])+'<br />';
			}
		}
		return err;
	}

	/*
	 * Convert mimetype into css class
	*/
	this.mime2class = function(mime) {
		return mime.replace('/' , ' ').replace(/\./g, '-');
	}

	/*
	 * Return localized date
	*/
	this.formatDate = function(d) {
		return d.replace(/([a-z]+)\s/i, function(a1, a2) { return self.fm.i18n(a2)+' '; });
	}

	/*
	 * Return formated file size
	*/
	this.formatSize = function(s) {
		var n = 1, u = 'bytes';
		if (s > 1073741824) {
			n = 1073741824;
			u = 'Gb';
		} else if (s > 1048576) {
            n = 1048576;
            u = 'Mb';
        } else if (s > 1024) {
            n = 1024;
            u = 'Kb';
        }
        return Math.round(s/n)+' '+u;
	}

	/*
	 * Return localized string with file permissions
	*/
	this.formatPermissions = function(r, w, rm) {
		var p = [];
		r  && p.push(self.fm.i18n('read'));
		w  && p.push(self.fm.i18n('write'));
		rm && p.push(self.fm.i18n('remove'));
		return p.join('/');
	}
	
	/*
	 * Return kind of file
	*/
	this.mime2kind = function(mime) {
		return this.fm.i18n(this.kinds[mime]||'unknown');
	}
	
}

})(jQuery);
/**
 * @class elFinder user Interface. 
 * @author dio dio@std42.ru
 **/
(function($) {
elFinder.prototype.ui = function(fm) {
	
	var self        = this;
	this.fm         = fm;
	this.cmd        = {};
	this.buttons    = {};
	this.menu       = $('<div class="el-finder-contextmenu" />').appendTo(document.body).hide();
	this.dockButton = $('<div class="el-finder-dock-button" title="'+self.fm.i18n('Dock/undock filemanager window')+'" />');
	
	this.exec = function(cmd, arg) {
		if (this.cmd[cmd]) {
			if (cmd != 'open' && !this.cmd[cmd].isAllowed()) {
				return this.fm.view.error('Command not allowed');
			}
			if (!this.fm.locked) {
				this.fm.quickLook.hide();
				$('.el-finder-info').remove();
				this.cmd[cmd].exec(arg);
				this.update();
			}
		}
	}
	
	this.cmdName = function(cmd) {
		if (this.cmd[cmd] && this.cmd[cmd].name) {
			return cmd == 'archive' && this.fm.params.archives.length == 1
				? this.fm.i18n('Create')+' '+this.fm.view.mime2kind(this.fm.params.archives[0]).toLowerCase()
				: this.fm.i18n(this.cmd[cmd].name);
		}
		return cmd;
	}
	
	this.isCmdAllowed = function(cmd) {
		return self.cmd[cmd] && self.cmd[cmd].isAllowed();
	}
	
	this.execIfAllowed = function(cmd) {
		this.isCmdAllowed(cmd) && this.exec(cmd);
	}
	
	this.includeInCm = function(cmd, t) {
		return this.isCmdAllowed(cmd) && this.cmd[cmd].cm(t);
	}
	
	this.showMenu = function(e) {
		var t, win, size, id = '';
		this.hideMenu();
		
		if (!self.fm.selected.length) {
			t = 'cwd';
		} else if (self.fm.selected.length == 1) {
			t = 'file';
		} else {
			t = 'group';
		}
		
		menu(t);
		
		win = $(window);
		size = {
	    	height : win.height(),
      		width  : win.width(),
      		sT     : win.scrollTop(),
      		cW     : this.menu.width(),
      		cH     : this.menu.height()
	    };
		this.menu.css({
				left : ((e.clientX + size.cW) > size.width ? ( e.clientX - size.cW) : e.clientX),
				top  : ((e.clientY + size.cH) > size.height && e.clientY > size.cH ? (e.clientY + size.sT - size.cH) : e.clientY + size.sT)
			})
			.show()
			.find('div[name]')
			.hover(
				function() { 
					var t = $(this), s = t.children('div'), w;
					t.addClass('hover');
					if (s.length) {
						if (!s.attr('pos')) {
							w  = t.outerWidth();
							s.css($(window).width() - w - t.offset().left > s.width() ? 'left' : 'right', w-5).attr('pos', true);
						}
						s.show();
					}
				}, 
				function() { $(this).removeClass('hover').children('div').hide(); }
			).click(function(e) {
				e.stopPropagation();
				var t = $(this);
				if (!t.children('div').length) {
					self.hideMenu();
					self.exec(t.attr('name'), t.attr('argc'));
				}
			});
		function menu(t) {
			var i, j, a, html, l, src = self.fm.options.contextmenu[t]||[];
			for (i=0; i < src.length; i++) {
				if (src[i] == 'delim') {
					self.menu.children().length && !self.menu.children(':last').hasClass('delim') && self.menu.append('<div class="delim" />');
				} else if (self.fm.ui.includeInCm(src[i], t)) {
					a = self.cmd[src[i]].argc();
					html = '';

					if (a.length) {
						html = '<span/><div class="el-finder-contextmenu-sub" style="z-index:'+(parseInt(self.menu.css('z-index'))+1)+'">';
						for (var j=0; j < a.length; j++) {
							html += '<div name="'+src[i]+'" argc="'+a[j].argc+'" class="'+a[j]['class']+'">'+a[j].text+'</div>';
						};
						html += '</div>';
					}
					self.menu.append('<div class="'+src[i]+'" name="'+src[i]+'">'+html+self.cmdName(src[i])+'</div>');
				}
			};
		}
	
	}
	
	this.hideMenu = function() {
		this.menu.hide().empty();
	}
	
	this.update = function() {
		for (var i in this.buttons) {
			this.buttons[i].toggleClass('disabled', !this.cmd[i].isAllowed());
		}
	}
	
	this.init = function(disabled) {
		var i, j, n, c=false, zindex = 2, z, t = this.fm.options.toolbar;
		/* disable select command if there is no callback for it */
		if (!this.fm.options.editorCallback) {
			disabled.push('select');
		}
		/* disable archive command if no archivers enabled  */
		if (!this.fm.params.archives.length && $.inArray('archive', disabled) == -1) {
			disabled.push('archive');
		}
		for (i in this.commands) {
			if ($.inArray(i, disabled) == -1) {
				this.commands[i].prototype = this.command.prototype;
				this.cmd[i] = new this.commands[i](this.fm);
			}
		}

		for (i=0; i<t.length; i++) {
			if (c) {
				this.fm.view.tlb.append('<li class="delim" />');
			}
			c = false;
			for (j=0; j<t[i].length; j++) {
				n = t[i][j];
				if (this.cmd[n]) {
					c = true;
					this.buttons[n] = $('<li class="'+n+'" title="'+this.cmdName(n)+'" name="'+n+'" />')
						.appendTo(this.fm.view.tlb)
						.click(function(e) { e.stopPropagation(); })
						.bind('click', (function(ui){ return function() {  
								!$(this).hasClass('disabled') && ui.exec($(this).attr('name'));
							} })(this)
						).hover(
							function() { !$(this).hasClass('disabled') && $(this).addClass('el-finder-tb-hover')},
							function() { $(this).removeClass('el-finder-tb-hover')}
						);
				}
			}
		}
		this.update();
		/* set z-index for context menu */
		this.menu.css('z-index', this.fm.zIndex);
		
		if (this.fm.options.docked) {
			this.dockButton.hover(
				function() { $(this).addClass('el-finder-dock-button-hover')},
				function() { $(this).removeClass('el-finder-dock-button-hover')}
			).click(function() { 
				self.fm.view.win.attr('undocked') ? self.fm.dock() : self.fm.undock();
				$(this).trigger('mouseout');
			}).prependTo(this.fm.view.tlb);
		}
		
	}

}

/**
 * @class elFinder user Interface Command. 
 * @author dio dio@std42.ru
 **/
elFinder.prototype.ui.prototype.command = function(fm) {  }

/**
 * Return true if command can be applied now 
 * @return Boolean
 **/
elFinder.prototype.ui.prototype.command.prototype.isAllowed = function() {
	return true;
}

/**
 * Return true if command can be included in contextmenu of required type
 * @param  String  contextmenu type (cwd|group|file)
 * @return Boolean
 **/
elFinder.prototype.ui.prototype.command.prototype.cm = function(t) {
	return false;
}

/**
 * Return not empty array if command required submenu in contextmenu
 * @return Array
 **/
elFinder.prototype.ui.prototype.command.prototype.argc = function(t) {
	return [];
}


elFinder.prototype.ui.prototype.commands = {
	
	/**
	 * @class Go into previous folder
	 * @param Object  elFinder
	 **/
	back : function(fm) {
		var self = this;
		this.name = 'Back';
		this.fm = fm;
		
		this.exec = function() {
			if (this.fm.history.length) {
				this.fm.ajax({ cmd : 'open', target : this.fm.history.pop()	}, function(data) {
					self.fm.reload(data);
				});
			}
		}
		
		this.isAllowed = function() {
			return this.fm.history.length
		}
		
	},
	
	/**
	 * @class Reload current directory and navigation panel
	 * @param Object  elFinder
	 **/
	reload : function(fm) {
		var self  = this;
		this.name = 'Reload';
		this.fm   = fm;
		
		this.exec = function() {
			this.fm.ajax({ cmd : 'open', target : this.fm.cwd.hash, tree : true }, function(data) {
				self.fm.reload(data);
			});
		}
		
		this.cm = function(t) {
			return t == 'cwd';
		}
	},
	
	/**
	 * @class Open file/folder
	 * @param Object  elFinder
	 **/
	open : function(fm) {
		var self  = this;
		this.name = 'Open';
		this.fm   = fm;
		
		/**
		 * Open file/folder
		 * @param String  file/folder id (only from click on nav tree)
		 **/
		this.exec = function(dir) {
			var t = null;
			if (dir) {
				t = {
					hash : $(dir).attr('key'),
					mime : 'directory',
					read : !$(dir).hasClass('noaccess') && !$(dir).hasClass('dropbox')
				}
			} else {
				t = this.fm.getSelected(0);
			}

			if (!t.hash) {
				return; 
			}
			if (!t.read) {
				return this.fm.view.error('Access denied');
			}
			if (t.type == 'link' && !t.link) {
				return this.fm.view.error('Unable to open broken link');
			}
			if (t.mime == 'directory') {
				openDir(t.link||t.hash);
			} else {
				openFile(t);
			}
			
			function openDir(id) {
				self.fm.history.push(self.fm.cwd.hash);
				self.fm.ajax({ cmd : 'open', target : id }, function(data) {
					self.fm.reload(data);
				});
			}
			
			function openFile(f) {
				var s, ws = '';
				if (f.dim) {
					s  = f.dim.split('x');
					ws = 'width='+(parseInt(s[0])+20)+',height='+(parseInt(s[1])+20)+',';
				}
				window.open(f.url||self.fm.options.url+'?cmd=open&current='+(f.parent||self.fm.cwd.hash)+'&target='+(f.link||f.hash), false, 'top=50,left=50,'+ws+'scrollbars=yes,resizable=yes');
			}
		}
	
		this.isAllowed = function() {
			return this.fm.selected.length == 1 && this.fm.getSelected(0).read;
		}
		
		this.cm = function(t) {
			return t == 'file';
		}
		
	},
	
	/**
	 * @class. Return file url
	 * @param Object  elFinder
	 **/
	select : function(fm) {
		this.name = 'Select file';
		this.fm   = fm;
				
		if (fm.options.selectMultiple) {
            this.exec = function() {

                var selected = $(fm.getSelected()).map(function() {
                    return fm.options.cutURL == 'root' ? this.url.substr(fm.params.url.length) : this.url.replace(new RegExp('^('+fm.options.cutURL+')'), ''); 
                });  

                fm.options.editorCallback(selected);

                if (fm.options.closeOnEditorCallback) {
                    fm.dock();
                    fm.close();
                }
            }
        } else {
            this.exec = function() { 
                var f = this.fm.getSelected(0);

                if (!f.url) {
                    return this.fm.view.error('File URL disabled by connector config');
                }
                this.fm.options.editorCallback(this.fm.options.cutURL == 'root' ? f.url.substr(this.fm.params.url.length) : f.url.replace(new RegExp('^('+this.fm.options.cutURL+')'), ''));

                if (this.fm.options.closeOnEditorCallback) {
                    this.fm.dock();
                    this.fm.close();
                    this.fm.destroy();
                }
				
            }
        }

        this.isAllowed = function() {
            return ((this.fm.options.selectMultiple && this.fm.selected.length >= 1) || this.fm.selected.length == 1) && !/(symlink\-broken|directory)/.test(this.fm.getSelected(0).mime);
        }
		
		this.cm = function(t) {
			return t != 'cwd';
			// return t == 'file';
		}
	},
	
	/**
	 * @class. Open/close quickLook window
	 * @param Object  elFinder
	 **/
	quicklook : function(fm) {
		var self  = this;
		this.name = 'Preview with Quick Look';
		this.fm   = fm;
		
		this.exec = function() {
			self.fm.quickLook.toggle();
		}
		
		this.isAllowed = function() {
			return this.fm.selected.length == 1;
		}
		
		this.cm = function() {
			return true;
		}
	},
	
	/**
	 * @class Display files/folders info in dialog window
	 * @param Object  elFinder
	 **/
	info : function(fm) {
		var self  = this;
		this.name = 'Get info';
		this.fm   = fm;
		
		/**
		 * Open dialog windows for each selected file/folder or for current folder
		 **/
		this.exec = function() {
			var f, s, cnt = this.fm.selected.length, w = $(window).width(), h = $(window).height();
			this.fm.lockShortcuts(true);
			if (!cnt) {
				/** nothing selected - show cwd info **/
				info(self.fm.cwd);
			} else {
				/** show info for each selected obj **/
				$.each(this.fm.getSelected(), function() {
					info(this);
				});
			}
			
			function info(f) {
				var p = ['50%', '50%'], x, y, d, 
					tb = '<table cellspacing="0"><tr><td>'+self.fm.i18n('Name')+'</td><td>'+f.name+'</td></tr><tr><td>'+self.fm.i18n('Kind')+'</td><td>'+self.fm.view.mime2kind(f.link ? 'symlink' : f.mime)+'</td></tr><tr><td>'+self.fm.i18n('Size')+'</td><td>'+self.fm.view.formatSize(f.size)+'</td></tr><tr><td>'+self.fm.i18n('Modified')+'</td><td>'+self.fm.view.formatDate(f.date)+'</td></tr><tr><td>'+self.fm.i18n('Permissions')+'</td><td>'+self.fm.view.formatPermissions(f.read, f.write, f.rm)+'</td></tr>';
				
				if (f.link) {
					tb += '<tr><td>'+self.fm.i18n('Link to')+'</td><td>'+f.linkTo+'</td></tr>';
				}
				if (f.dim) {
					tb += '<tr><td>'+self.fm.i18n('Dimensions')+'</td><td>'+f.dim+' px.</td></tr>';
				}
				if (f.url) {
					tb += '<tr><td>'+self.fm.i18n('URL')+'</td><td><a href="'+f.url+'" target="_blank">'+f.url+'</a></td></tr>';
				}

				if (cnt>1) {
					d = $('.el-finder-dialog-info:last');
					if (!d.length) {
						x = Math.round(((w-350)/2)-(cnt*10));
						y = Math.round(((h-300)/2)-(cnt*10));
						p = [x>20?x:20, y>20?y:20];
					} else {
						x = d.offset().left+10;
						y = d.offset().top+10;
						p = [x<w-350 ? x : 20, y<h-300 ? y : 20];
					}
				}

				$('<div />').append(tb+'</table>').dialog({
					dialogClass : 'el-finder-dialog el-finder-dialog-info',
					width       : 390,
					position    : p,
					title       : self.fm.i18n(f.mime == 'directory' ? 'Folder info' : 'File info'),
					close       : function() { if (--cnt <= 0) { self.fm.lockShortcuts(); } $(this).dialog('destroy'); },
					buttons     : { Ok : function() { $(this).dialog('close'); }}
				});
			}
		}
	
		this.cm = function(t) {
			return true;
		}
	},
	
	/**
	 * @class Rename file/folder
	 * @param Object elFinder
	 **/
	rename : function(fm) {
		var self  = this;
		this.name = 'Rename';
		this.fm   = fm;
		
		this.exec = function() {
			var s = this.fm.getSelected(), el, c, input, f, n;
			
			if (s.length == 1) {
				f  = s[0];
				el = this.fm.view.cwd.find('[key="'+f.hash+'"]');
				c  = this.fm.options.view == 'icons' ? el.children('label') : el.find('td').eq(1);
				n  = c.html();
				input = $('<input type="text" />').val(f.name).appendTo(c.empty())
					.bind('change blur', rename)
					.keydown(function(e) {
						e.stopPropagation();
						if (e.keyCode == 27) {
							restore();
						} else if (e.keyCode == 13) {
							if (f.name == input.val()) {
								restore();
							} else {
								$(this).trigger('change');
							}
						}
					})
					.click(function(e) { e.stopPropagation(); })
					.select()
					.focus();
				this.fm.lockShortcuts(true);
			}

			function restore() {
				c.html(n);
				self.fm.lockShortcuts();
			}
			
			function rename() {
				
				if (!self.fm.locked) {
					var err, name = input.val();
					if (f.name == input.val()) {
						return restore();
					}

					if (!self.fm.isValidName(name)) {
						err = 'Invalid name';
					} else if (self.fm.fileExists(name)) {
						err = 'File or folder with the same name already exists';
					}
					
					if (err) {
						self.fm.view.error(err);
						el.addClass('ui-selected');
						self.fm.lockShortcuts(true);
						return input.select().focus();
					}
					
					self.fm.ajax({cmd : 'rename', current : self.fm.cwd.hash, target : f.hash, name : name}, function(data) {
						if (data.error) {
							restore();
						} else {
							f.mime == 'directory' && self.fm.removePlace(f.hash) && self.fm.addPlace(data.target);
							self.fm.reload(data); 
						}
					}, { force : true });
				}
			}
		}
		
		/**
		 * Return true if only one file selected and has write perms and current dir has write perms
		 * @return Boolean
		 */
		this.isAllowed = function() {
			return this.fm.cwd.write && this.fm.getSelected(0).write;
		}

		this.cm = function(t) {
			return t == 'file';
		}
	},
	
	/**
	 * @class Copy file/folder to "clipboard"
	 * @param Object elFinder
	 **/
	copy : function(fm) {
		this.name = 'Copy';
		this.fm   = fm;
		
		this.exec = function() {
			this.fm.setBuffer(this.fm.selected);
		}
		
		this.isAllowed = function() {
			if (this.fm.selected.length) {
				var s = this.fm.getSelected(), l = s.length;
				while (l--) {
					if (s[l].read) {
						return true;
					}
				}
			}
			return false;
		}
		
		this.cm = function(t) {
			return t != 'cwd';
		}
	},
	
	/**
	 * @class Cut file/folder to "clipboard"
	 * @param Object elFinder
	 **/
	cut : function(fm) {
		this.name = 'Cut';
		this.fm   = fm;
		
		this.exec = function() {
			this.fm.setBuffer(this.fm.selected, 1);
		}
		
		this.isAllowed = function() {
			if (this.fm.selected.length) {
				var s = this.fm.getSelected(), l = s.length;
				while (l--) {
					if (s[l].read && s[l].rm) {
						return true;
					}
				}
			}
			return false;
		}
		
		this.cm = function(t) {
			return t != 'cwd';
		}
	},
	
	/**
	 * @class Paste file/folder from "clipboard"
	 * @param Object elFinder
	 **/
	paste : function(fm) {
		var self  = this;
		this.name = 'Paste';
		this.fm   = fm;
		
		this.exec = function() {
			var i, d, f, r, msg = '';
			
			if (!this.fm.buffer.dst) {
				this.fm.buffer.dst = this.fm.cwd.hash;
			}
			d = this.fm.view.tree.find('[key="'+this.fm.buffer.dst+'"]');
			if (!d.length || d.hasClass('noaccess') || d.hasClass('readonly')) {
				return this.fm.view.error('Access denied');
			}
			if (this.fm.buffer.src == this.fm.buffer.dst) {
				return this.fm.view.error('Unable to copy into itself');
			}
			var o = {
				cmd       : 'paste',
				current   : this.fm.cwd.hash,
				src       : this.fm.buffer.src,
				dst       : this.fm.buffer.dst,
				cut       : this.fm.buffer.cut
			};
			if (this.fm.jquery>132) {
				o.targets = this.fm.buffer.files;
			} else {
				o['targets[]'] = this.fm.buffer.files;
			}
			this.fm.ajax(o, function(data) {
				data.cdc && self.fm.reload(data);
			}, {force : true});
		}
		
		this.isAllowed = function() {
			return this.fm.buffer.files;
		}
		
		this.cm = function(t) {
			return t == 'cwd';
		}
	},
	
	/**
	 * @class Remove files/folders
	 * @param Object elFinder
	 **/
	rm : function(fm) {
		var self  = this;
		this.name = 'Remove';
		this.fm   = fm;
		
		this.exec = function() {
			var i, ids = [], s =this.fm.getSelected();
			for (var i=0; i < s.length; i++) {
				if (!s[i].rm) {
					return this.fm.view.error(s[i].name+': '+this.fm.i18n('Access denied'));
				}
				ids.push(s[i].hash);
			};
			if (ids.length) {
				this.fm.lockShortcuts(true);
				$('<div><div class="ui-state-error ui-corner-all"><span class="ui-icon ui-icon-alert"/><strong>'+this.fm.i18n('Are you sure you want to remove files?<br /> This cannot be undone!')+'</strong></div></div>')
					.dialog({
						title       : this.fm.i18n('Confirmation required'),
						dialogClass : 'el-finder-dialog',
						width       : 350,
						close       : function() { self.fm.lockShortcuts(); },
						buttons     : {
							Cancel : function() { $(this).dialog('close'); },
							Ok     : function() { 
								$(this).dialog('close'); 
								var o = { cmd : 'rm', current : self.fm.cwd.hash };
								if (self.fm.jquery > 132) {
									o.targets = ids;
								} else {
									o['targets[]'] = ids;
								}
								self.fm.ajax(o, function(data) { data.tree && self.fm.reload(data); }, {force : true});
							}
						}
					});
			}
		}
		
		this.isAllowed = function(f) {
			if (this.fm.selected.length) {
				var s = this.fm.getSelected(), l = s.length;
				while (l--) {
					if (s[l].rm) {
						return true;
					}
				}
			}
			return false;
		}
		
		this.cm = function(t) {
			return t != 'cwd';
		}
	},
	
	/**
	 * @class Create new folder
	 * @param Object  elFinder
	 **/
	mkdir : function(fm) {
		var self  = this;
		this.name = 'New folder';
		this.fm   = fm;
		
		this.exec = function() {
			self.fm.unselectAll();
			var n     = this.fm.uniqueName('untitled folder');
				input = $('<input type="text"/>').val(n);
				prev  = this.fm.view.cwd.find('.directory:last');
				f     = {name : n, hash : '', mime :'directory', read : true, write : true, date : '', size : 0},
				el    = this.fm.options.view == 'list' 
						? $(this.fm.view.renderRow(f)).children('td').eq(1).empty().append(input).end().end()
						: $(this.fm.view.renderIcon(f)).children('label').empty().append(input).end()
			el.addClass('directory ui-selected');
			if (prev.length) {
				el.insertAfter(prev);
			} else if (this.fm.options.view == 'list') {
				el.insertAfter(this.fm.view.cwd.find('tr').eq(0))
			} else {
				el.prependTo(this.fm.view.cwd)
			}
			self.fm.checkSelectedPos();
			input.select().focus()
				.click(function(e) { e.stopPropagation(); })
				.bind('change blur', mkdir)
				.keydown(function(e) {
					e.stopPropagation();
					if (e.keyCode == 27) {
						el.remove();
						self.fm.lockShortcuts();
					} else if (e.keyCode == 13) {
						mkdir();
					}
				});

			self.fm.lockShortcuts(true);

			function mkdir() {
				if (!self.fm.locked) {
					var err, name = input.val();
					if (!self.fm.isValidName(name)) {
						err = 'Invalid name';
					} else if (self.fm.fileExists(name)) {
						err = 'File or folder with the same name already exists';
					}
					if (err) {
						self.fm.view.error(err);
						self.fm.lockShortcuts(true);
						el.addClass('ui-selected');
						return input.select().focus();
					}
					
					self.fm.ajax({cmd : 'mkdir', current : self.fm.cwd.hash, name : name}, function(data) {
						if (data.error) {
							el.addClass('ui-selected');
							return input.select().focus();
						}
						self.fm.reload(data);
					}, {force : true});
				}
			}
		}
		
		this.isAllowed = function() {
			return this.fm.cwd.write;
		}
		
		this.cm = function(t) {
			return t == 'cwd';
		}
	},
	
	/**
	 * @class Create new text file
	 * @param Object  elFinder
	 **/
	mkfile : function(fm) {
		var self  = this;
		this.name = 'New text file';
		this.fm   = fm;
		
		this.exec = function() {
			self.fm.unselectAll();
			var n     = this.fm.uniqueName('untitled file', '.txt'),
				input = $('<input type="text"/>').val(n), 
				f     = {name : n, hash : '', mime :'text/plain', read : true, write : true, date : '', size : 0},
				el    = this.fm.options.view == 'list' 
					? $(this.fm.view.renderRow(f)).children('td').eq(1).empty().append(input).end().end()
					: $(this.fm.view.renderIcon(f)).children('label').empty().append(input).end();
					
			el.addClass('text ui-selected').appendTo(this.fm.options.view == 'list' ? self.fm.view.cwd.children('table') : self.fm.view.cwd);
			
			input.select().focus()
				.bind('change blur', mkfile)
				.click(function(e) { e.stopPropagation(); })
				.keydown(function(e) {
					e.stopPropagation();
					if (e.keyCode == 27) {
						el.remove();
						self.fm.lockShortcuts();
					} else if (e.keyCode == 13) {
						mkfile();
					}
				});
			self.fm.lockShortcuts(true);
			
			function mkfile() {
				if (!self.fm.locked) {
					var err, name = input.val();
					if (!self.fm.isValidName(name)) {
						err = 'Invalid name';
					} else if (self.fm.fileExists(name)) {
						err = 'File or folder with the same name already exists';
					}
					if (err) {
						self.fm.view.error(err);
						self.fm.lockShortcuts(true);
						el.addClass('ui-selected');
						return input.select().focus();
					}
					self.fm.ajax({cmd : 'mkfile', current : self.fm.cwd.hash, name : name}, function(data) {
						if (data.error) {
							el.addClass('ui-selected');
							return input.select().focus();
						}
						self.fm.reload(data);
					}, {force : true });
				}
			}
			
		}
		
		this.isAllowed = function(f) {
			return this.fm.cwd.write;
		}
		
		this.cm = function(t) {
			return t == 'cwd';
		}
	},
	
	/**
	 * @class Upload files
	 * @param Object  elFinder
	 **/
	upload : function(fm) {
		var self  = this;
		this.name = 'Upload files';
		this.fm   = fm;
		
		this.exec = function() {

			var id = 'el-finder-io-'+(new Date().getTime()),
				e = $('<div class="ui-state-error ui-corner-all"><span class="ui-icon ui-icon-alert"/><div/></div>'),
				m = this.fm.params.uplMaxSize ? '<p>'+this.fm.i18n('Maximum allowed files size')+': '+this.fm.params.uplMaxSize+'</p>' : '',
				b = $('<p class="el-finder-add-field"><span class="ui-state-default ui-corner-all"><em class="ui-icon ui-icon-circle-plus"/></span>'+this.fm.i18n('Add field')+'</p>')
					.click(function() { $(this).before('<p><input type="file" name="upload[]"/></p>'); }),
				f = '<form method="post" enctype="multipart/form-data" action="'+self.fm.options.url+'" target="'+id+'"><input type="hidden" name="cmd" value="upload" /><input type="hidden" name="current" value="'+self.fm.cwd.hash+'" />',
				d = $('<div/>'),
				i = 3;

				while (i--) { f += '<p><input type="file" name="upload[]"/></p>'; }

				// Rails csrf meta tag (for XSS protection), see #256
				var rails_csrf_token = $('meta[name=csrf-token]').attr('content');
				var rails_csrf_param = $('meta[name=csrf-param]').attr('content');
				if (rails_csrf_param != null && rails_csrf_token != null) {
					f += '<input name="'+rails_csrf_param+'" value="'+rails_csrf_token+'" type="hidden" />';
				}

				f = $(f+'</form>');
				
				d.append(f.append(e.hide()).prepend(m).append(b)).dialog({
						dialogClass : 'el-finder-dialog',
						title       : self.fm.i18n('Upload files'),
						modal       : true,
						resizable   : false,
						close       : function() { self.fm.lockShortcuts(); },
						buttons     : {
							Cancel : function() { $(this).dialog('close'); },
							Ok     : function() {
								if (!$(':file[value]', f).length) {
									return error(self.fm.i18n('Select at least one file to upload'));
								}
								setTimeout(function() {
									self.fm.lock();
									if ($.browser.safari) {
										$.ajax({
											url     : self.fm.options.url,
											data    : {cmd : 'ping'},
											error   : submit,
											success : submit
										});
									} else {
										submit();
									}
								});
								$(this).dialog('close');
							}
						}
					});

			self.fm.lockShortcuts(true);

			function error(err) {
				e.show().find('div').empty().text(err);
			}

			function submit() {
				var $io = $('<iframe name="'+id+'" name="'+id+'" src="about:blank"/>'),
					io  = $io[0],
					cnt = 50,
					doc, html, data;
					
				$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' })
				.appendTo('body').bind('load', function() {
					$io.unbind('load');
					result();
				});
				
				self.fm.lock(true);
				f.submit();
				
				function result() {
					try {
						doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
						/* opera */
						if (doc.body == null || doc.body.innerHTML == '') {
							if (--cnt) {
								return setTimeout(result, 100);
							} else {
								complite();
								return self.fm.view.error('Unable to access iframe DOM after 50 tries');
							}
						}
						/* get server response */
						html = $(doc.body).html();
						if (self.fm.jquery>=141) {
							data = $.parseJSON(html);
						} else if ( /^[\],:{}\s]*$/.test(html.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
							.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
							.replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ) {
								/* get from jQuery 1.4 */
							data = window.JSON && window.JSON.parse ? window.JSON.parse(html) : (new Function("return " + html))();
						} else {
							data = { error : 'Unable to parse server response' };
						}
						
					} catch(e) {
						data = { error : 'Unable to parse server response' };
					}
					complite();
					data.error && self.fm.view.error(data.error, data.errorData);
					data.cwd && self.fm.reload(data);
					data.tmb && self.fm.tmb();
				}
				
				function complite() {
					self.fm.lock();
					$io.remove();
				}
					
			}

		}
		
		this.isAllowed = function() {
			return this.fm.cwd.write;
		}
		
		this.cm = function(t) {
			return t == 'cwd';
		}
	},
	
	/**
	 * @class Make file/folder copy
	 * @param Object  elFinder
	 **/
	duplicate : function(fm) {
		var self  = this;
		this.name = 'Duplicate';
		this.fm   = fm;
		
		this.exec = function() {
			this.fm.ajax({
				cmd     : 'duplicate',
				current : this.fm.cwd.hash,
				target  : this.fm.selected[0]
			},
			function(data) {
				self.fm.reload(data);
			});
		}
		
		this.isAllowed = function() {
			return this.fm.cwd.write && this.fm.selected.length == 1 && this.fm.getSelected()[0].read;
		}
		
		this.cm = function(t) {
			return t == 'file';
		}
	},
	
	/**
	 * @class Edit text file
	 * @param Object  elFinder
	 **/
	edit : function(fm) {
		var self  = this;
		this.name = 'Edit text file';
		this.fm   = fm;
		
		this.exec = function() {
			var f = this.fm.getSelected(0);
			this.fm.lockShortcuts(true);
			this.fm.ajax({
				cmd     : 'read',
				current : this.fm.cwd.hash,
				target    : f.hash
			}, function(data) {
				self.fm.lockShortcuts(true);
				var ta = $('<textarea/>').val(data.content||'').keydown(function(e) {
					e.stopPropagation();
					if (e.keyCode == 9) {
						e.preventDefault();
						if ($.browser.msie) {
							var r = document.selection.createRange();
							r.text = "\t"+r.text;
							this.focus();
						} else {
							var before = this.value.substr(0, this.selectionStart),
							after = this.value.substr(this.selectionEnd);
							this.value = before+"\t"+after;
							this.setSelectionRange(before.length+1, before.length+1);
						}
					}
				});
				$('<div/>').append(ta)
					.dialog({
						dialogClass : 'el-finder-dialog',
						title   : self.fm.i18n(self.name),
						modal   : true,
						width   : 500,
						close   : function() { self.fm.lockShortcuts(); },
						buttons : {
							Cancel : function() { $(this).dialog('close'); },
							Ok     : function() {
								var c = ta.val();
								$(this).dialog('close');
								self.fm.ajax({
									cmd     : 'edit',
									current : self.fm.cwd.hash,
									target  : f.hash,
									content : c
								}, function(data) {
									if (data.target) {
										self.fm.cdc[data.target.hash] = data.target;
										self.fm.view.updateFile(data.target);
										self.fm.selectById(data.target.hash);
										
									}
								}, {type : 'POST'});
							}
						}
					});
			});
		}
		
		this.isAllowed = function() {
			if (self.fm.selected.length == 1) {
				var f = this.fm.getSelected()[0];
				return f.write && f.read && (f.mime.indexOf('text') == 0 || f.mime == 'application/x-empty' || f.mime == 'application/xml');
			}
		}
		
		this.cm = function(t) {
			return t == 'file';
		}
	},
	
	/**
	 * @class Create archive
	 * @param Object  elFinder
	 **/
	archive : function(fm) {
		var self  = this;
		this.name = 'Create archive';
		this.fm   = fm;
		
		this.exec = function(t) {
			var o = {
				cmd     : 'archive',
				current : self.fm.cwd.hash,
				type    : $.inArray(t, this.fm.params.archives) != -1 ? t : this.fm.params.archives[0],
				name    : self.fm.i18n('Archive')
			};
			if (this.fm.jquery>132) {
				o.targets = self.fm.selected;
			} else {
				o['targets[]'] = self.fm.selected;
			}
			
			this.fm.ajax(o, function(data) { self.fm.reload(data); });
		}
		
		this.isAllowed = function() {
			if (this.fm.cwd.write && this.fm.selected.length) {
				var s = this.fm.getSelected(), l = s.length;
				while (l--) {
					if (s[l].read) {
						return true;
					}
				}
			}
			return false;
		}
		
		this.cm = function(t) {
			return t != 'cwd';
		}
		
		this.argc = function() {
			var i, v = [];
			for (i=0; i < self.fm.params.archives.length; i++) {
				v.push({
					'class' : 'archive',
					'argc'  : self.fm.params.archives[i],
					'text'  : self.fm.view.mime2kind(self.fm.params.archives[i])
				});
			};
			return v;
		}
	},
	
	/**
	 * @class Extract files from archive
	 * @param Object  elFinder
	 **/
	extract : function(fm) {
		var self  = this;
		this.name = 'Uncompress archive';
		this.fm   = fm;
		
		this.exec = function() {
			this.fm.ajax({
				cmd     : 'extract',
				current : this.fm.cwd.hash,
				target  : this.fm.getSelected(0).hash
			}, function(data) {
				self.fm.reload(data);
			})
		}
		
		this.isAllowed = function() {
			var extract = this.fm.params.extract,
				cnt = extract && extract.length;
			return this.fm.cwd.write && this.fm.selected.length == 1 && this.fm.getSelected(0).read && cnt && $.inArray(this.fm.getSelected(0).mime, extract) != -1;
		}
		
		this.cm = function(t) {
			return t == 'file';
		}
	},
	
	/**
	 * @class Resize image
	 * @param Object  elFinder
	 **/
	resize : function(fm) {
		var self  = this;
		this.name = 'Resize image';
		this.fm   = fm;
		
		this.exec = function() {
			var s = this.fm.getSelected();
			if (s[0] && s[0].write && s[0].dim) {
				var size = s[0].dim.split('x'), 
					w  = parseInt(size[0]), 
					h  = parseInt(size[1]), rel = w/h
					iw = $('<input type="text" size="9" value="'+w+'" name="width"/>'),
					ih = $('<input type="text" size="9" value="'+h+'" name="height"/>'),
					f  = $('<form/>').append(iw).append(' x ').append(ih).append(' px');
				iw.add(ih).bind('change', calc);
				self.fm.lockShortcuts(true);
				var d = $('<div/>').append($('<div/>').text(self.fm.i18n('Dimensions')+':')).append(f).dialog({
					title : self.fm.i18n('Resize image'),
					dialogClass : 'el-finder-dialog',
					width : 230,
					modal : true,
					close : function() { self.fm.lockShortcuts(); },
					buttons : {
						Cancel : function() { $(this).dialog('close'); },
						Ok     : function() {
							var _w = parseInt(iw.val()) || 0,
								_h = parseInt(ih.val()) || 0;
							if (_w>0 && _w != w && _h>0 && _h != h) {
								self.fm.ajax({
									cmd     : 'resize',
									current : self.fm.cwd.hash,
									target  : s[0].hash,
									width   : _w,
									height  : _h
								},
								function (data) {
									self.fm.reload(data);
								});
							}
							$(this).dialog('close');
						}
					}
				});
			} 
			
			function calc() {
				var _w = parseInt(iw.val()) || 0,
					_h = parseInt(ih.val()) || 0;
					
				if (_w<=0 || _h<=0) {
					_w = w;
					_h = h;
				} else if (this == iw.get(0)) {
					_h = parseInt(_w/rel);
				} else {
					_w = parseInt(_h*rel);
				}
				iw.val(_w);
				ih.val(_h);
			}
			
		}
		
		this.isAllowed = function() {
			return this.fm.selected.length == 1 && this.fm.cdc[this.fm.selected[0]].write && this.fm.cdc[this.fm.selected[0]].read && this.fm.cdc[this.fm.selected[0]].resize;
		}
		
		this.cm = function(t) {
			return t == 'file';
		}
	},
	
	/**
	 * @class Switch elFinder into icon view
	 * @param Object  elFinder
	 **/
	icons : function(fm) {
		this.name = 'View as icons';
		this.fm   = fm;
		
		this.exec = function() {
			this.fm.view.win.addClass('el-finder-disabled');
			this.fm.setView('icons');
			this.fm.updateCwd();
			this.fm.view.win.removeClass('el-finder-disabled');
			$('div.image', this.fm.view.cwd).length && this.fm.tmb();
		}
		
		this.isAllowed = function() {
			return this.fm.options.view != 'icons';
		}
		
		this.cm = function(t) {
			return t == 'cwd';
		}
	},
	
	/**
	 * @class Switch elFinder into list view
	 * @param Object  elFinder
	 **/
	list : function(fm) {
		this.name = 'View as list';
		this.fm   = fm;
		
		this.exec = function() {
			this.fm.view.win.addClass('el-finder-disabled');
			this.fm.setView('list');
			this.fm.updateCwd();
			this.fm.view.win.removeClass('el-finder-disabled');
		}
		
		this.isAllowed = function() {
			return this.fm.options.view != 'list';
		}
		
		this.cm = function(t) {
			return t == 'cwd';
		}
	},
	
	help : function(fm) {
		this.name = 'Help';
		this.fm   = fm;
		
		this.exec = function() {
			var h, ht = this.fm.i18n('helpText'), a, s, tabs; 
			
			h = '<div class="el-finder-logo"/><strong>'+this.fm.i18n('elFinder: Web file manager')+'</strong><br/>'+this.fm.i18n('Version')+': '+this.fm.version+'<br/>'
				+'jQuery/jQueryUI: '+$().jquery+'/'+$.ui.version+'<br clear="all"/>'
				+'<p><strong><a href="http://elrte.org/'+this.fm.options.lang+'/elfinder" target="_blank">'+this.fm.i18n('Donate to support project development')+'</a></strong></p>'
				+ '<p><a href="http://elrte.org/redmine/projects/elfinder/wiki" target="_blank">'+this.fm.i18n('elFinder documentation')+'</a></p>';
			h += '<p>'+(ht != 'helpText' ? ht : 'elFinder works similar to file manager on your computer. <br /> To make actions on files/folders use icons on top panel. If icon action it is not clear for you, hold mouse cursor over it to see the hint. <br /> Manipulations with existing files/folders can be done through the context menu (mouse right-click).<br/> To copy/delete a group of files/folders, select them using Shift/Alt(Command) + mouse left-click.')+'</p>';
			h += '<p>'
				+ '<strong>'+this.fm.i18n('elFinder support following shortcuts')+':</strong><ul>'
				+ '<li><kbd>Ctrl+A</kbd> - '+this.fm.i18n('Select all files')+'</li>'
			 	+ '<li><kbd>Ctrl+C/Ctrl+X/Ctrl+V</kbd> - '+this.fm.i18n('Copy/Cut/Paste files')+'</li>'
			 	+ '<li><kbd>Enter</kbd> - '+this.fm.i18n('Open selected file/folder')+'</li>'
				+ '<li><kbd>Space</kbd> - '+this.fm.i18n('Open/close QuickLook window')+'</li>'
			 	+ '<li><kbd>Delete/Cmd+Backspace</kbd> - '+this.fm.i18n('Remove selected files')+'</li>'
			 	+ '<li><kbd>Ctrl+I</kbd> - '+this.fm.i18n('Selected files or current directory info')+'</li>'
			 	+ '<li><kbd>Ctrl+N</kbd> - '+this.fm.i18n('Create new directory')+'</li>'
			 	+ '<li><kbd>Ctrl+U</kbd> - '+this.fm.i18n('Open upload files form')+'</li>'
			 	+ '<li><kbd>Left arrow</kbd> - '+this.fm.i18n('Select previous file')+'</li>'
			 	+ '<li><kbd>Right arrow </kbd> - '+this.fm.i18n('Select next file')+'</li>'
			 	+ '<li><kbd>Ctrl+Right arrow</kbd> - '+this.fm.i18n('Open selected file/folder')+'</li>'
			 	+ '<li><kbd>Ctrl+Left arrow</kbd> - '+this.fm.i18n('Return into previous folder')+'</li>'
			 	+ '<li><kbd>Shift+arrows</kbd> - '+this.fm.i18n('Increase/decrease files selection')+'</li></ul>'
			 	+ '</p><p>'
			 	+ this.fm.i18n('Contacts us if you need help integrating elFinder in you products')+': dev@std42.ru</p>';

			a = '<div class="el-finder-help-std"/>'
				+'<p>'+this.fm.i18n('Javascripts/PHP programming: Dmitry (dio) Levashov, dio@std42.ru')+'</p>'
				+'<p>'+this.fm.i18n('Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru')+'</p>'
				+'<p>'+this.fm.i18n('Design: Valentin Razumnih')+'</p>'
				+'<p>'+this.fm.i18n('Chezh localization')+': Roman Matěna, info@romanmatena.cz</p>'
				+'<p>'+this.fm.i18n('Chinese (traditional) localization')+': Tad, tad0616@gmail.com</p>'
				+'<p>'+this.fm.i18n('Dutch localization')+': Kurt Aerts, <a href="http://ilabsolutions.net/" target="_blank">http://ilabsolutions.net</a></p>'
				+'<p>'+this.fm.i18n('Greek localization')+': Panagiotis Skarvelis</p>'
				+'<p>'+this.fm.i18n('Hungarian localization')+': Viktor Tamas, tamas.viktor@totalstudio.hu</p>'
				+'<p>'+this.fm.i18n('Italian localization')+':  Ugo Punzolo, sadraczerouno@gmail.com</p>'
				+'<p>'+this.fm.i18n('Latvian localization')+':  Uldis Plotiņš, uldis.plotins@gmail.com</p>'
				+'<p>'+this.fm.i18n('Poland localization')+':  Darek Wapiński, darek@wapinski.us</p>'
				+'<p>'+this.fm.i18n('Spanish localization')+': Alex (xand) Vavilin, xand@xand.es, <a href="http://xand.es" target="_blank">http://xand.es</a></p>'
				+'<p>'+this.fm.i18n('Icons')+': <a href="http://pixelmixer.ru/" target="_blank">pixelmixer</a>,  <a href="http://www.famfamfam.com/lab/icons/silk/" target="_blank">Famfam silk icons</a>, <a href="http://www.fatcow.com/free-icons/" target="_blank">Fatcow icons</a>'+'</p>'
				+'<p>'+this.fm.i18n('Copyright: <a href="http://www.std42.ru" target="_blank">Studio 42 LTD</a>')+'</p>'
				+'<p>'+this.fm.i18n('License: BSD License')+'</p>'
				+'<p>'+this.fm.i18n('Web site: <a href="http://elrte.org/elfinder/" target="_blank">elrte.org/elfinder</a>')+'</p>';
			
			s = '<div class="el-finder-logo"/><strong><a href="http://www.eldorado-cms.ru" target="_blank">ELDORADO.CMS</a></strong><br/>'
				+this.fm.i18n('Simple and usefull Content Management System')
				+'<hr/>'
				+ this.fm.i18n('Support project development and we will place here info about you');
			
			tabs = '<ul><li><a href="#el-finder-help-h">'+this.fm.i18n('Help')+'</a></li><li><a href="#el-finder-help-a">'+this.fm.i18n('Authors')+'</a><li><a href="#el-finder-help-sp">'+this.fm.i18n('Sponsors')+'</a></li></ul>'
					+'<div id="el-finder-help-h"><p>'+h+'</p></div>'
					+'<div id="el-finder-help-a"><p>'+a+'</p></div>'
					+'<div id="el-finder-help-sp"><p>'+s+'</p></div>';
			
			var d = $('<div/>').html(tabs).dialog({
				width       : 617,
				title       : this.fm.i18n('Help'),
				dialogClass : 'el-finder-dialog',
				modal       : true,
				close       : function() { d.tabs('destroy').dialog('destroy').remove() },
				buttons     : {
					Ok : function() { $(this).dialog('close'); }
				}
			}).tabs()
		}


		this.cm = function(t) {
			return t == 'cwd';
		}
	}
}

})(jQuery);

/**
 * @class Create quick look window (similar to MacOS X Quick Look)
 * @author dio dio@std42.ru
 **/
(function($) {
elFinder.prototype.quickLook = function(fm, el) {
	var self    = this;
	this.fm     = fm;
	this._hash  = '';
	this.title  = $('<strong/>');
	this.ico    = $('<p/>');
	this.info   = $('<label/>');
	this.media  = $('<div class="el-finder-ql-media"/>').hide()
	
	this.name = $('<span class="el-finder-ql-name"/>')
	this.kind = $('<span class="el-finder-ql-kind"/>')
	this.size = $('<span class="el-finder-ql-size"/>')
	this.date = $('<span class="el-finder-ql-date"/>')
	this.url  = $('<a href="#"/>').hide().click(function(e) {
		e.preventDefault();
		window.open($(this).attr('href'));
		self.hide();
	});

	this.add = $('<div/>')
	this.content = $('<div class="el-finder-ql-content"/>')
	this.win     = $('<div class="el-finder-ql"/>').hide()
		.append($('<div class="el-finder-ql-drag-handle"/>').append($('<span class="ui-icon ui-icon-circle-close"/>').click(function() { self.hide(); })).append(this.title))
		.append(this.ico)
		.append(this.media)
		.append(this.content.append(this.name).append(this.kind).append(this.size).append(this.date).append(this.url).append(this.add))
		// .appendTo(this.fm.view.win)
		.appendTo('body')
		.draggable({handle : '.el-finder-ql-drag-handle'})
		.resizable({
			minWidth  : 420,
			minHeight : 150,
			resize    : function() {
				if (self.media.children().length) {
					var t = self.media.children(':first');
					switch (t[0].nodeName) {
						case 'IMG':
							var w = t.width(),
								h = t.height(),
								_w = self.win.width(),
								_h = self.win.css('height') == 'auto' ? 350 : self.win.height()-self.content.height()-self.th,
								r = w>_w || h>_h 
									? Math.min(Math.min(_w, w)/w, Math.min(_h, h)/h) 
									: Math.min(Math.max(_w, w)/w, Math.max(_h, h)/h);
							t.css({
								width : Math.round(t.width()*r),
								height : Math.round(t.height()*r)
							})
							break;
						case 'IFRAME':
						case 'EMBED':
							t.css('height', self.win.height()-self.content.height()-self.th);
							break;
						case 'OBJECT':
							t.children('embed').css('height', self.win.height()-self.content.height()-self.th);
					}
				}
			}
		});
	
	this.th = parseInt(this.win.children(':first').css('height'))||18;
	/* All browsers do it, but some is shy to says about it. baka da ne! */
	this.mimes = {
		'image/jpeg' : 'jpg',
		'image/gif'  : 'gif',
		'image/png'  : 'png'
		};

	for (var i=0; i<navigator.mimeTypes.length; i++) {
		var t = navigator.mimeTypes[i].type;
		if (t && t != '*') {
			this.mimes[t] = navigator.mimeTypes[i].suffixes;
		}
	}
	
	if (($.browser.safari && navigator.platform.indexOf('Mac') != -1) || $.browser.msie) {
		/* not booletproof, but better then nothing */
		this.mimes['application/pdf'] = 'pdf';
	} else {
		for (var n=0; n < navigator.plugins.length; n++) {
			for (var m=0; m < navigator.plugins[n].length; m++) {
				var e = navigator.plugins[n][m].description.toLowerCase();
				if (e.substring(0, e.indexOf(" ")) == 'pdf') {
					this.mimes['application/pdf'] = 'pdf';
					break;
				}
			}
		}
	}
	
	if (this.mimes['image/x-bmp']) {
		this.mimes['image/x-ms-bmp'] = 'bmp';
	}
	
	if ($.browser.msie && !this.mimes['application/x-shockwave-flash']) {
		this.mimes['application/x-shockwave-flash'] = 'swf';
	}
	
	// self.fm.log(this.mimes)
	
	/**
	 * Open quickLook window
	 **/
	this.show = function() {
		if (this.win.is(':hidden') && self.fm.selected.length == 1) {
			update();
			var id = self.fm.selected[0],
			 	el = self.fm.view.cwd.find('[key="'+id+'"]'),
				o  = el.offset();
				
			self.fm.lockShortcuts(true);
			this.win.css({
				width    : el.width()-20,
				height   : el.height(),
				left     : o.left,
				top      : o.top,
				opacity  : 0
			}).show().animate({
				width    : 420,
				height   : 150,
				opacity  : 1,
				top      : Math.round($(window).height()/5),
				left     : $(window).width()/2-210
			}, 450, function() { 
				self.win.css({height: 'auto'});
				self.fm.lockShortcuts();
			});
		}
	}
	
	/**
	 * Close quickLook window
	 **/
	this.hide = function() {
		if (this.win.is(':visible')) {
			var o, el = self.fm.view.cwd.find('[key="'+this._hash+'"]');
			if (el) {
				o = el.offset();
				this.media.hide(200)//.empty()
				this.win.animate({
					width    : el.width()-20,
					height   : el.height(),
					left     : o.left,
					top      : o.top,
					opacity  : 0
				}, 350, function() {
					self.fm.lockShortcuts();
					reset();
					self.win.hide().css('height', 'auto');
				});
			} else {
				this.win.fadeOut(200);
				reset();
				self.fm.lockShortcuts();
			}
		}
	}
	
	/**
	 * Open/close quickLook window
	 **/
	this.toggle = function() {
		if (this.win.is(':visible')) {
			this.hide();
		} else {
			this.show();
		}
	}
	
	/**
	 * Update quickLook window content if only one file selected,
	 * otherwise close window
	 **/
	this.update = function() {
		if (this.fm.selected.length != 1) {
			this.hide();
		} else if (this.win.is(':visible') && this.fm.selected[0] != this._hash) {
			update();
		}
	}
	
	/**
	 * Return height of this.media block
	 * @return Number
	 **/
	this.mediaHeight = function() {
		return this.win.is(':animated') || this.win.css('height') == 'auto' ? 315 : this.win.height()-this.content.height()-this.th;
	}
	
	/**
	 * Clean quickLook window DOM elements
	 **/
	function reset() {
		self.media.hide().empty();
		self.win.attr('class', 'el-finder-ql').css('z-index', self.fm.zIndex);
		self.title.empty();
		self.ico.attr('style', '').show();
		self.add.hide().empty();
		self._hash = '';
	}
	
	/**
	 * Update quickLook window content
	 **/
	function update() {
		var f = self.fm.getSelected(0);
		reset();

		self._hash = f.hash;
		self.title.text(f.name);
		self.win.addClass(self.fm.view.mime2class(f.mime));
		self.name.text(f.name);
		self.kind.text(self.fm.view.mime2kind(f.link ? 'symlink' : f.mime)); 
		self.size.text(self.fm.view.formatSize(f.size));
		self.date.text(self.fm.i18n('Modified')+': '+self.fm.view.formatDate(f.date));
		f.dim && self.add.append('<span>'+f.dim+' px</span>').show();
		f.tmb && self.ico.css('background', 'url("'+f.tmb+'") 0 0 no-repeat');
		if (f.url) {
			self.url.text(f.url).attr('href', f.url).show();
			for (var i in self.plugins) {
				if (self.plugins[i].test && self.plugins[i].test(f.mime, self.mimes, f.name)) {
					self.plugins[i].show(self, f);
					return;
				}
			}
		} else {
			self.url.hide();
		}
		
		self.win.css({
			width  : '420px',
			height : 'auto'
		});
	}

}

elFinder.prototype.quickLook.prototype.plugins = {
	
	image : new function() {

		this.test = function(mime, mimes) {
			return mime.match(/^image\//);
		}
		
		this.show = function(ql, f) {
			var url, t;

			if (ql.mimes[f.mime] && f.hash == ql._hash) {
				$('<img/>').hide().appendTo(ql.media.show()).attr('src', f.url+($.browser.msie || $.browser.opera ? '?'+Math.random() : '')).load(function() {
					t = $(this).unbind('load');
					if (f.hash == ql._hash) { 
						ql.win.is(':animated') ? setTimeout(function() { preview(t); }, 330) : preview(t);
					} 
				});
			}
			
			function preview(img) {
				var w = img.width(),
					h = img.height(),
					a = ql.win.is(':animated'),
					_w = a ? 420 : ql.win.width(), 
					_h = a || ql.win.css('height') == 'auto' ? 315 : ql.win.height()-ql.content.height()-ql.th,
					r = w>_w || h>_h 
						? Math.min(Math.min(_w, w)/w, Math.min(_h, h)/h)
						: Math.min(Math.max(_w, w)/w, Math.max(_h, h)/h);

				ql.fm.lockShortcuts(true);
				ql.ico.hide();
				img.css({
					width  : ql.ico.width(),
					height : ql.ico.height()
				}).show().animate({
					width  : Math.round(r*w),
					height : Math.round(r*h)
				}, 450, function() { 
					ql.fm.lockShortcuts(); 
				});
			}
		}
		
	},
	
	text : new function() {

		this.test = function(mime, mimes) {
			return (mime.indexOf('text') == 0 && mime.indexOf('rtf') == -1) || mime.match(/application\/(xml|javascript|json)/);
		}
		
		this.show = function(ql, f) {
			if (f.hash == ql._hash) {
				ql.ico.hide();
				ql.media.append('<iframe src="'+f.url+'" style="height:'+ql.mediaHeight()+'px" />').show();
			}
		}
	},
	
	swf : new function() {
		
		this.test = function(mime, mimes) {
			return mime == 'application/x-shockwave-flash' && mimes[mime];
		}
		
		this.show = function(ql, f) {
			if (f.hash == ql._hash) {
				ql.ico.hide();
				// ql.media.append('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="quality" value="high" /><param name="movie" value="'+url+'" /><embed pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="'+url+'" type="application/x-shockwave-flash" style="width:100%;height:'+ql.mediaHeight()+'px"></embed></object>')
					// .slideDown(400);
				var e = ql.media.append('<embed pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="'+f.url+'" style="width:100%;height:'+ql.mediaHeight()+'px" type="application/x-shockwave-flash" />'); 
				if (ql.win.is(':animated')) {
					e.slideDown(450)
				} else {
					e.show()
				}
			}
		}
	},
	
	audio : new function() {
		
		this.test = function(mime, mimes) {
			return mime.indexOf('audio') == 0 && mimes[mime];
		}
		
		this.show = function(ql, f) {
			if (f.hash == ql._hash) {
				ql.ico.hide();
				var h = ql.win.is(':animated') || ql.win.css('height') == 'auto' ? 100 : ql.win.height()-ql.content.height()-ql.th;
				ql.media.append('<embed src="'+f.url+'" style="width:100%;height:'+h+'px" />').show();
			}
		}
	},
	
	video : new function() {
		
		this.test = function(mime, mimes) {
			return mime.indexOf('video') == 0 && mimes[mime];
		}
		
		this.show = function(ql, f) {
			if (f.hash == ql._hash) {
				ql.ico.hide();
				ql.media.append('<embed src="'+f.url+'" style="width:100%;height:'+ql.mediaHeight()+'px" />').show();
			}
		}
		
	},
	
	pdf : new function() {
		
		this.test = function(mime, mimes) {
			return mime == 'application/pdf' && mimes[mime];
		}
		
		this.show = function(ql, f) {
			if (f.hash == ql._hash) {
				ql.ico.hide();
				ql.media.append('<embed src="'+f.url+'" style="width:100%;height:'+ql.mediaHeight()+'px" />').show();
			}
		}
	}
	
}


})(jQuery);
/**
 * @class  Bind/update events
 * @author dio dio@std42.ru
 **/
(function($) {
elFinder.prototype.eventsManager = function(fm, el) {
	var self   = this;
	this.lock  = false;
	this.fm    = fm;
	this.ui    = fm.ui;
	this.tree  = fm.view.tree
	this.cwd   = fm.view.cwd;
	this.pointer = '';

	/**
	 * Initial events binding
	 *
	 **/
	this.init = function() {
		var self = this, ignore = false;
		
		self.lock = false;
		
		this.cwd
			.bind('click', function(e) {
				var t = $(e.target);
				if (t.hasClass('ui-selected')) {
					self.fm.unselectAll();
				} else {
					if (!t.attr('key')) {
						t = t.parent('[key]');
					}
					if (e.ctrlKey || e.metaKey) {
						self.fm.toggleSelect(t);
					} else {
						self.fm.select(t, true);
					}
				}
			})
			.bind(window.opera?'click':'contextmenu', function(e) {
				if (window.opera && !e.ctrlKey) {
					return;
				}
				e.preventDefault();
				e.stopPropagation();

				var t = $(e.target);
				if ($.browser.mozilla) {
					ignore = true;
				}
				

				if (t.hasClass('el-finder-cwd')) {
					self.fm.unselectAll();
				} else {
					self.fm.select(t.attr('key') ? t : t.parent('[key]'));
				}
				self.fm.quickLook.hide();
				self.fm.ui.showMenu(e);
			})
			.selectable({
				filter : '[key]',
				delay  : 300,
				stop   : function() { self.fm.updateSelect(); self.fm.log('mouseup') }
			});
			
		$(document).bind('click', function(e) { 
			!ignore && self.fm.ui.hideMenu(); 
			ignore = false
			$('input', self.cwd).trigger('change'); 

			if (!$(e.target).is('input,textarea,select')) {
				$('input,textarea').blur();
			}
		});

		$('input,textarea').live('focus', function(e) {
			self.lock = true;
		}).live('blur', function(e) {
			self.lock = false;
		});

		/* open parents dir in tree */
		this.tree.bind('select', function(e) {
			self.tree.find('a').removeClass('selected');
			$(e.target).addClass('selected').parents('li:has(ul)').children('ul').show().prev().children('div').addClass('expanded');
		});
		
		/* make places droppable */
		if (this.fm.options.places) {

			this.fm.view.plc.click(function(e) {
				e.preventDefault();
				var t = $(e.target),
					h = t.attr('key'), ul;
				
				if (h) {
					h != self.fm.cwd.hash && self.ui.exec('open', e.target)
				} else if (e.target.nodeName == 'A' || e.target.nodeName == 'DIV') {
					ul = self.fm.view.plc.find('ul');
					if (ul.children().length) {
						ul.toggle(300);
						self.fm.view.plc.children('li').find('div').toggleClass('expanded');
					}
				}
			});
			
			this.fm.view.plc.droppable({
				accept    : '(div,tr).directory',
				tolerance : 'pointer',
				over      : function() { $(this).addClass('el-finder-droppable'); },
				out       : function() { $(this).removeClass('el-finder-droppable'); },
				drop      : function(e, ui) {
					$(this).removeClass('el-finder-droppable');
					var upd = false;
					/* accept only folders with read access */
					ui.helper.children('.directory:not(.noaccess,.dropbox)').each(function() {
						if (self.fm.addPlace($(this).attr('key'))) {
							upd = true;
							$(this).hide();
						}
					});
					/* update places id's and view */
					if (upd) {
						self.fm.view.renderPlaces();
						self.updatePlaces();
						self.fm.view.plc.children('li').children('div').trigger('click');
					}
					/* hide helper if empty */
					if (!ui.helper.children('div:visible').length) {
						ui.helper.hide();
					}
				}
			});
		}
		
		/* bind shortcuts */
		
		$(document).bind($.browser.mozilla || $.browser.opera ? 'keypress' : 'keydown', function(e) {
			var meta = e.ctrlKey||e.metaKey;
			
			if (self.lock) {
				return;
			}
			switch(e.keyCode) {
				/* arrows left/up. with Ctrl - exec "back", w/o - move selection */
				case 37:
				case 38:
					e.stopPropagation();
					e.preventDefault();
					if (e.keyCode == 37 && meta) {
						self.ui.execIfAllowed('back');
					} else {
						moveSelection(false, !e.shiftKey);
					}
					break;
				/* arrows right/down. with Ctrl - exec "open", w/o - move selection  */
				case 39:
				case 40:
					e.stopPropagation();
					e.preventDefault();
					if (meta) {
						self.ui.execIfAllowed('open');
					} else {
						moveSelection(true, !e.shiftKey);
					}
					break;
			}
		});
		

		$(document).bind($.browser.opera ? 'keypress' : 'keydown', function(e) {

			if (self.lock) {
				return;
			}
			switch(e.keyCode) {
				/* Space - QuickLook */
				case 32:
					e.preventDefault();
					e.stopPropagation();
					self.fm.quickLook.toggle();
					break;
				/* Esc */	
				case 27:
					self.fm.quickLook.hide();
					break;
			}
		});
		
		if (!this.fm.options.disableShortcuts) {
			
			$(document).bind('keydown', function(e) {
				var meta = e.ctrlKey||e.metaKey;

				if (self.lock) {
					return;
				}
				switch (e.keyCode) {
					/* Meta+Backspace - delete */
					case 8:
						if (meta && self.ui.isCmdAllowed('rm')) {
							e.preventDefault();
							self.ui.exec('rm');
						} 
						break;
					/* Enter - exec "select" command if enabled, otherwise exec "open" */	
					case 13:
						if (self.ui.isCmdAllowed('select')) {
							return self.ui.exec('select');
						}
						self.ui.execIfAllowed('open');
						break;
					/* Delete */
					case 46:
						self.ui.execIfAllowed('rm');
						break;
					/* Ctrl+A */
					case 65:
						if (meta) {
							e.preventDefault();
							self.fm.selectAll();
						}
						break;
					/* Ctrl+C */
					case 67:
						meta && self.ui.execIfAllowed('copy');
						break;
					/* Ctrl+I - get info */	
					case 73:
						if (meta) {
							e.preventDefault();
							self.ui.exec('info');
						}
						break;
					/* Ctrl+N - new folder */
					case 78:
						if (meta) {
							e.preventDefault();
							self.ui.execIfAllowed('mkdir');
						}
						break;
					/* Ctrl+U - upload files */
					case 85:
					
						if (meta) {
							e.preventDefault();
							self.ui.execIfAllowed('upload');
						}
						break;
					/* Ctrl+V */
					case 86:
						meta && self.ui.execIfAllowed('paste');
						break;
					/* Ctrl+X */
					case 88:
						meta && self.ui.execIfAllowed('cut');
						break;
						
					case 113:
						self.ui.execIfAllowed('rename');
						break;
						
				}

			});
			
		}
		
	}
	
	/**
	 * Update navigation droppable/draggable
	 *
	 **/
	this.updateNav = function() {
		$('a', this.tree).click(function(e) {
			e.preventDefault();
			var t = $(this), c;
			if (e.target.nodeName == 'DIV' && $(e.target).hasClass('collapsed')) {
				$(e.target).toggleClass('expanded').parent().next('ul').toggle(300);
			} else if (t.attr('key') != self.fm.cwd.hash) {
				if (t.hasClass('noaccess') || t.hasClass('dropbox')) {
					self.fm.view.error('Access denied');
				} else {
					self.ui.exec('open', t.trigger('select')[0]);
				}
			} else {
				c = t.children('.collapsed');
				if (c.length) {
					c.toggleClass('expanded');
					t.next('ul').toggle(300);
				}
			}
		});
		
		$('a:not(.noaccess,.readonly)', this.tree).droppable({
			tolerance : 'pointer',
			accept : 'div[key],tr[key]',
			over   : function() { $(this).addClass('el-finder-droppable'); },
			out    : function() { $(this).removeClass('el-finder-droppable'); },
			drop   : function(e, ui) { $(this).removeClass('el-finder-droppable'); self.fm.drop(e, ui, $(this).attr('key')); }
		});
		this.fm.options.places && this.updatePlaces();
	}
	
	/**
	 * Update places draggable
	 *
	 **/
	this.updatePlaces = function() {
		this.fm.view.plc.children('li').find('li').draggable({
			scroll : false,
			stop   : function() {
				if (self.fm.removePlace($(this).children('a').attr('key'))) {
					$(this).remove();
					if (!$('li', self.fm.view.plc.children('li')).length) {
						self.fm.view.plc.children('li').find('div').removeClass('collapsed expanded').end().children('ul').hide();
					}
				}
			}
		});
	}
	
	/**
	 * Update folders droppable & files/folders draggable
	 **/
	this.updateCwd = function() {
		
		$('[key]', this.cwd)
			.bind('dblclick', function(e) {
				self.fm.select($(this), true);
				self.ui.exec(self.ui.isCmdAllowed('select') ? 'select' : 'open');
			})
			.draggable({
				delay      : 3,
				addClasses : false,
				appendTo : '.el-finder-cwd',
				revert     : true,
				drag       : function(e, ui) {
					ui.helper.toggleClass('el-finder-drag-copy', e.shiftKey||e.ctrlKey);
				},
				helper     : function() {
					var t = $(this),
						h = $('<div class="el-finder-drag-helper"/>'),
						c = 0;
					!t.hasClass('ui-selected') && self.fm.select(t, true);

					self.cwd.find('.ui-selected').each(function(i) {
						var el = self.fm.options.view == 'icons' ? $(this).clone().removeClass('ui-selected') : $(self.fm.view.renderIcon(self.fm.cdc[$(this).attr('key')]))
						if (c++ == 0 || c%12 == 0) {
							el.css('margin-left', 0);
						}
						h.append(el);
					});
					return h.css('width', (c<=12 ? 85+(c-1)*29 : 387)+'px');
				}
			})
			.filter('.directory')
			.droppable({
				tolerance : 'pointer',
				accept    : 'div[key],tr[key]',
				over      : function() { $(this).addClass('el-finder-droppable');  },
				out       : function() { $(this).removeClass('el-finder-droppable'); },
				drop      : function(e, ui) { $(this).removeClass('el-finder-droppable'); self.fm.drop(e, ui, $(this).attr('key')); }
			});
			
		if ($.browser.msie) {
			$('*', this.cwd).attr('unselectable', 'on')
				.filter('[key]')
					.bind('dragstart', function() { self.cwd.selectable('disable').removeClass('ui-state-disabled ui-selectable-disabled'); })
					.bind('dragstop', function() { self.cwd.selectable('enable'); });
		}

	}
	
	/**
	 * Move selection in current dir 
	 *
	 * @param Boolean  move forward?
	 * @param Boolean  clear current selection?
	 **/
	function moveSelection(forward, reset) {
		var p, _p, cur;
		
		if (!$('[key]', self.cwd).length) {
			return;
		}
		
		if (self.fm.selected.length == 0) {
			p = $('[key]:'+(forward ? 'first' : 'last'), self.cwd);
			self.fm.select(p);
		} else if (reset) {
			p  = $('.ui-selected:'+(forward ? 'last' : 'first'), self.cwd);
			_p = p[forward ? 'next' : 'prev']('[key]');
			if (_p.length) {
				p = _p;
			}
			self.fm.select(p, true);
		} else {
			if (self.pointer) {
				cur = $('[key="'+self.pointer+'"].ui-selected', self.cwd);
			}
			if (!cur || !cur.length) {
				cur = $('.ui-selected:'+(forward ? 'last' : 'first'), self.cwd);
			}
			p = cur[forward ? 'next' : 'prev']('[key]');

			if (!p.length) {
				p = cur;
			} else {
				if (!p.hasClass('ui-selected')) {
					self.fm.select(p);
				} else {
					if (!cur.hasClass('ui-selected')) {
						self.fm.unselect(p);
					} else {
						_p = cur[forward ? 'prev' : 'next']('[key]')
						if (!_p.length || !_p.hasClass('ui-selected')) {
							self.fm.unselect(cur);
						} else {
							while ((_p = forward ? p.next('[key]') : p.prev('[key]')) && p.hasClass('ui-selected')) {
								p = _p;
							}
							self.fm.select(p);
						}
					}
				}
			} 
		}
		self.pointer = p.attr('key');
		self.fm.checkSelectedPos(forward);
	}
	
}

})(jQuery);;
/**
 * Russian translation
 * @author Dmitry Levashov <dio@std42.ru>
 * @version 2010-09-22
 */
(function($) {
if (elFinder && elFinder.prototype.options && elFinder.prototype.options.i18n) 
	elFinder.prototype.options.i18n.ru = {
		/* errors */
		'Root directory does not exists'       : 'Корневая директория не существует',
		'Unable to connect to backend'         : 'Не удалось соединиться с сервером',
		'Access denied'                        : 'Доступ запрещен',
		'Invalid backend configuration'        : 'Некорректный ответ сервера',
		'Unknown command'                      : 'Неизвестная команда',
		'Command not allowed'                  : 'Выполнение команды запрещено',
		'Invalid parameters'                   : 'Некорректные параметры',
		'File not found'                       : 'Файл не наден',
		'Invalid name'                         : 'Некорректное имя',
		'File or folder with the same name already exists' : 'Файл или папка с таким именем уже существует',
		'Unable to rename file'                : 'Не удалось переименовать файл',
		'Unable to create folder'              : 'Не удалось создать папку',
		'Unable to create file'                : 'Не удалось создать файл',  
		'No file to upload'                    : 'Нет файлов для загрузки',
		'Select at least one file to upload'   : 'Выберите, как минимум, один файл для загрузки',
		'File exceeds the maximum allowed filesize' : 'Размер файла превышает максимально разрешенный размер',
		'Data exceeds the maximum allowed size' : 'Данные превысили максимально разрешенный размер',
		'Not allowed file type'                 : 'Неразрешенный тип файла',
		'Unable to upload file'                 : 'Не удалось загрузить файл',
		'Unable to upload files'                : 'Не удалось загрузить файлы',
		'Unable to remove file'                 : 'Не удалось удалить файл',
		'Unable to save uploaded file'          : 'Не удалось сохранить загруженый файл',
		'Some files was not uploaded'           : 'Некоторые файлы не удалось загрузить',
		'Unable to copy into itself'            : 'Невозможно скопировать в себя',
		'Unable to move files'                  : 'Не удалось переместить файлы',
		'Unable to copy files'                  : 'Не удалось скопировать файлы',
		'Unable to create file copy'            : 'Не удалось создать копию файла',
		'File is not an image'                  : 'Файл не является изображением',
		'Unable to resize image'                : 'Не удалось изменить размеры изображения',
		'Unable to write to file'               : 'Не удалось записать файл',
		'Unable to create archive'              : 'Не удалось создать архив',
		'Unable to extract files from archive'  : 'Не удалось извлечь файлы из архива',
		'Unable to open broken link'            : 'Невозможно открыть битую ссылку',
		'File URL disabled by connector config' : 'Доступ к адресам файлов запрещен настройками коннектора',
		/* statusbar */
		'items'          : 'объектов',
		'selected items' : 'выбрано объектов',
		/* commands/buttons */
		'Back'                    : 'Назад',
		'Reload'                  : 'Обновить',
		'Open'                    : 'Открыть',
		'Preview with Quick Look' : 'Быстрый просмотр',
		'Select file'             : 'Выбрать файл',
		'New folder'              : 'Новая папка',
		'New text file'           : 'Новый файл',
		'Upload files'            : 'Загрузить файлы',
		'Copy'                    : 'Копировать',
		'Cut'                     : 'Вырезать',
		'Paste'                   : 'Вставить',
		'Duplicate'               : 'Дублировать',
		'Remove'                  : 'Удалить',
		'Rename'                  : 'Переименовать',
		'Edit text file'          : 'Редактировать файл',
		'View as icons'           : 'Иконки',
		'View as list'            : 'Список',
		'Resize image'            : 'Размер изображения',
		'Create archive'          : 'Новый архив',
		'Uncompress archive'      : 'Распаковать архив',
		'Get info'                : 'Свойства',
		'Help'                    : 'Помощь',
		'Dock/undock filemanager window' : 'Отсоединить/присоединить файловый менеджер к странице',
		/* upload/get info dialogs */
		'Maximum allowed files size' : 'Максимальный размер файлов',
		'Add field'   : 'Добавить поле',
		'File info'   : 'Свойства файла',
		'Folder info' : 'Свойства папки',
		'Name'        : 'Имя',
		'Kind'        : 'Тип',
		'Size'        : 'Размер',
		'Modified'    : 'Изменен',
		'Permissions' : 'Доступ',
		'Link to'     : 'Указывает',
		'Dimensions'  : 'Разрешение',
		'Confirmation required' : 'Требуется подтверждение',
		'Are you sure you want to remove files?<br /> This cannot be undone!' : 'Вы уверены, что хотите удалить файл? <br />Действие необратимо.',
		/* permissions */
		'read'        : 'чтение',
		'write'       : 'запись',
		'remove'      : 'удаление',
		/* dates */
		'Jan'         : 'Янв',
		'Feb'         : 'Фев',
		'Mar'         : 'Мар',
		'Apr'         : 'Апр',
		'May'         : 'Май',
		'Jun'         : 'Июнь',
		'Jul'         : 'Июль',
		'Aug'         : 'Авг',
		'Sep'         : 'Сен',
		'Oct'         : 'Окт',
		'Nov'         : 'Ноя',
		'Dec'         : 'Дек',
		'Today'       : 'Сегодня',
		'Yesterday'   : 'Вчера',
		/* mimetypes */
		'Unknown'                           : 'Неизвестный',
		'Folder'                            : 'Папка',
		'Alias'                             : 'Ссылка',
		'Broken alias'                      : 'Битая ссылка',
		'Plain text'                        : 'Обычный текст',
		'Postscript document'               : 'Документ postscript',
		'Application'                       : 'Приложение',
		'Microsoft Office document'         : 'Документ Microsoft Office',
		'Microsoft Word document'           : 'Документ Microsoft Word',  
		'Microsoft Excel document'          : 'Документ Microsoft Excel',
		'Microsoft Powerpoint presentation' : 'Презентация Microsoft Powerpoint',
		'Open Office document'              : 'Документ Open Office',
		'Flash application'                 : 'Приложение Flash',
		'XML document'                      : 'Документ XML',
		'Bittorrent file'                   : 'Bittorrent файл',
		'7z archive'                        : 'Архив 7z',
		'TAR archive'                       : 'Архив TAR',
		'GZIP archive'                      : 'Архив GZIP',
		'BZIP archive'                      : 'Архив BZIP',
		'ZIP archive'                       : 'Архив ZIP',
		'RAR archive'                       : 'Архив RAR',
		'Javascript application'            : 'Приложение Javascript',
		'PHP source'                        : 'Исходник PHP',
		'HTML document'                     : 'Документ HTML',
		'Javascript source'                 : 'Исходник Javascript',
		'CSS style sheet'                   : 'Таблица стилей CSS',
		'C source'                          : 'Исходник C',
		'C++ source'                        : 'Исходник C++',
		'Unix shell script'                 : 'Скрипт Unix shell',
		'Python source'                     : 'Исходник Python',
		'Java source'                       : 'Исходник Java',
		'Ruby source'                       : 'Исходник Ruby',
		'Perl script'                       : 'Скрипт Perl',
		'BMP image'                         : 'Изображение BMP',
		'JPEG image'                        : 'Изображение JPEG',
		'GIF Image'                         : 'Изображение GIF',
		'PNG Image'                         : 'Изображение PNG',
		'TIFF image'                        : 'Изображение TIFF',
		'TGA image'                         : 'Изображение TGA',
		'Adobe Photoshop image'             : 'Изображение Adobe Photoshop',
		'MPEG audio'                        : 'Аудио MPEG',
		'MIDI audio'                        : 'Аудио MIDI',
		'Ogg Vorbis audio'                  : 'Аудио Ogg Vorbis',
		'MP4 audio'                         : 'Аудио MP4',
		'WAV audio'                         : 'Аудио WAV',
		'DV video'                          : 'Видео DV',
		'MP4 video'                         : 'Видео MP4',
		'MPEG video'                        : 'Видео MPEG',
		'AVI video'                         : 'Видео AVI',
		'Quicktime video'                   : 'Видео Quicktime',
		'WM video'                          : 'Видео WM',
		'Flash video'                       : 'Видео Flash',
		'Matroska video'                    : 'Видео Matroska',
		// 'Shortcuts' : 'Клавиши',		
		'Select all files' : 'Выделить все файлы',
		'Copy/Cut/Paste files' : 'Копировать/Вырезать/Вставить файлы',
		'Open selected file/folder' : 'Открыть папку/файл',
		'Open/close QuickLook window' : 'Открыть/закрыть окно быстрого просмотра',
		'Remove selected files' : 'Удалить выделеные файлы',
		'Selected files or current directory info' : 'Информация о выделеных файлах или текущей папке',
		'Create new directory' : 'Новая папка',
		'Open upload files form' : 'Открыть окно загрузки файлов',
		'Select previous file' : 'Выбрать предыдущий файл',
		'Select next file' : 'Выбрать следующий файл',
		'Return into previous folder' : 'Вернуться в предыдущую папку',
		'Increase/decrease files selection' : 'Увеличить/уменьшить выделение файлов',
		'Authors'                       : 'Авторы',
		'Sponsors'  : 'Спонсоры',
		'elFinder: Web file manager'    : 'elFinder: Файловый менеджер для Web',
		'Version'                       : 'Версия',
		'Copyright: Studio 42 LTD'      : 'Copyright: Студия 42',
		'Donate to support project development' : 'Поддержите разработку',
		'Javascripts/PHP programming: Dmitry (dio) Levashov, dio@std42.ru' : 'Программирование Javascripts/php: Дмитрий (dio) Левашов, dio@std42.ru',
		'Python programming, techsupport: Troex Nevelin, troex@fury.scancode.ru' : 'Программирование Python, техподдержка: Troex Nevelin, troex@fury.scancode.ru',
		'Design: Valentin Razumnih'     : 'Дизайн: Валентин Разумных',
		'Spanish localization'          : 'Испанская локализация',
		'Chezh localization'            : 'Чешская локализация',
		'Chinese (traditional) localization' : 'Китайская (трад.) локализация',
		'Dutch localization'            : 'Голландская локализация',
		'Greek localization'            : 'Греческая локализация',
		'Hungarian localization'        : 'Венгерская локализация',
		'Italian localization'          : 'Итальянская локализация',
		'Latvian localization'          : 'Латвийская локализация',
		'Poland localization'           : 'Польская локализация',
		'Icons'                         : 'Иконки',
		'License: BSD License'          : 'Лицензия: BSD License',
		'elFinder documentation'        : 'Документация elFinder',
		'Simple and usefull Content Management System' : 'Простая и удобная Система Управления Сайтами',
		'Support project development and we will place here info about you' : 'Поддержите разработку продукта и мы разместим здесь информацию о вас.',
		'Contacts us if you need help integrating elFinder in you products' : 'Если необходима помощь в интеграции elFinder с ваши продуктами, обращайтесь к нам',
		'elFinder support following shortcuts' : 'elFinder поддерживает следующие сочетания клавиш',
		'helpText' : 'elFinder работает аналогично файловому менеджеру в вашем компьютере.<br />Манипулировать файлами можно с помощью кнопок на верхней панели, контекстного меню или сочетания клавиш. Чтобы переместить файлы/папки, просто перенесите их на иконку нужной папки. Если будет зажата клавиша Shift файлы будут скопированы.'
		
	};
	
})(jQuery);
;
// $Id: helper.js 100 2011-02-20 19:14:25Z ph0enix $

Drupal.elfinder = {
  editor: {
  
  }

}

;

(function($) {
  $().ready(function() {
    if (Drupal.settings.elfinder) {
      var editorApp = Drupal.settings.elfinder.editorApp;

      var elfinderOpts = {
        url : Drupal.settings.elfinder.connectorUrl,
        lang : Drupal.settings.elfinder.langCode,
        rememberLastDir : Drupal.settings.elfinder.rememberLastDir,
        closeOnEditorCallback : false
      }
    
      if (editorApp && typeof window[Drupal.settings.elfinder.editorCallback] == 'function') {
        elfinderOpts.editorCallback = window[Drupal.settings.elfinder.editorCallback];
      }
    
      $('#finder').elfinder(elfinderOpts);
    }
  });

})(jQuery);
;
