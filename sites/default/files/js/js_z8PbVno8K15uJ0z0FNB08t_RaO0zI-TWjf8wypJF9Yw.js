Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","No results":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","All":"\u0412\u0441\u0435","New":"\u041d\u043e\u0432\u043e\u0435","Modules installed within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules added within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","Recent":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439","Modules enabled\/disabled within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435\/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules were enabled or disabled within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438.","@enabled of @total":"@enabled \u0438\u0437 @total","Also allow !name role to !permission?":"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0440\u043e\u043b\u0438 !name \u043f\u0440\u0430\u0432\u0430 !permission?","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","This field is required.":"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Show layout designer":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043c\u0430\u043a\u0435\u0442\u0430","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u044d\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Log messages":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0441 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u043e\u0437\u043e\u043d\u0430 \u043e\u0442 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"\u0424\u0430\u0439\u043b %filename \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Do you want to refresh the current directory?":"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043f\u043a\u0443?","Delete selected files?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b?","Please select a thumbnail.":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443.","You must select at least %num files.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 %num \u0444\u0430\u0439\u043b\u043e\u0432.","You can not perform this operation.":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e.","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Change view":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0438\u0434"}} };;
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
 * Live preview of Administration menu components.
 */
Drupal.behaviors.adminMenuLivePreview = {
  attach: function (context, settings) {
    $('input[name^="admin_menu_components"]', context).once('admin-menu-live-preview')
      .change(function () {
        var target = $(this).attr('rel');
        $(target).toggle(this.checked);
      })
      .trigger('change');
  }
};

/**
 * Automatically enables required permissions on demand.
 *
 * Many users do not understand that two permissions are required for the
 * administration menu to appear. Since Drupal core provides no facility for
 * this, we implement a simple manual confirmation for automatically enabling
 * the "other" permission.
 */
Drupal.behaviors.adminMenuPermissionsSetupHelp = {
  attach: function (context, settings) {
    $('#permissions', context).once('admin-menu-permissions-setup', function () {
      // Retrieve matrix/mapping - these need to use the same indexes for the
      // same permissions and roles.
      var $roles = $(this).find('th:not(:first)');
      var $admin = $(this).find('input[name$="[access administration pages]"]');
      var $menu = $(this).find('input[name$="[access administration menu]"]');

      // Retrieve the permission label - without description.
      var adminPermission = $.trim($admin.eq(0).parents('td').prev().children().get(0).firstChild.textContent);
      var menuPermission = $.trim($menu.eq(0).parents('td').prev().children().get(0).firstChild.textContent);

      $admin.each(function (index) {
        // Only proceed if both are not enabled already.
        if (!(this.checked && $menu[index].checked)) {
          // Stack both checkboxes and attach a click event handler to both.
          $(this).add($menu[index]).click(function () {
            // Do nothing when disabling a permission.
            if (this.checked) {
              // Figure out which is the other, check whether it still disabled,
              // and if so, ask whether to auto-enable it.
              var other = (this == $admin[index] ? $menu[index] : $admin[index]);
              if (!other.checked && confirm(Drupal.t('Also allow !name role to !permission?', {
                '!name': $roles[index].textContent,
                '!permission': (this == $admin[index] ? menuPermission : adminPermission)
              }))) {
                other.checked = 'checked';
              }
            }
          });
        }
      });
    });
  }
};

})(jQuery);
;
