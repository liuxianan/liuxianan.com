/*! The file is creted by lxa --Wed Jul 05 2017 20:05:28 GMT+0800 (中国标准时间) */
webpackJsonp([0],{7:function(t,n,e){function o(t){if(t="string"==typeof t?t:$("#input_content").val()){var n=xei.formatJSON(t,$("#format_json_indent").val(),!$("#format_json_new_line").prop("checked"));$("#output_content").val(n)}}e(0),$("#btn_format_json").on("click",o),$("#btn_paste_test").on("click",function(){$("#input_content").val('{"retcode":0,"retmsg":"ok","total_num":45,"total_page":4,"page":1,"result_rows":[{"operator":"test","op_type":"定时配置","op_details":"删除定时配置//操作流水","create_time":"2017-02-02 12:32:34"},{"operator":"test","op_type":"添加产品","op_details":"添加人脸识别","create_time":"2017-02-02 12:32:34"},{"operator":"test","op_type":"流量配置","op_details":"修改流量配置","create_time":"2017-02-02 12:32:34"}]}'),o()}),$("#btn_clear").on("click",function(){$("#input_content").val("")}),$("#format_json_indent").on("change",o),$("#format_json_new_line").on("change",o),$("#input_content").on("paste",function(t){o(t.originalEvent.clipboardData.getData("text"))})}},[7]);