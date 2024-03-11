var apiServers=[];

//云服务
var appxmbt={name:"app.byte-top.info",url:"https://app.byte-info.top:1000/swagger/docs/",vers:[
	"v1",
	"v2",
	"v3",
	"systemdefault",
	"pay",
	"paymange",
	"settlement",
	"systemmanage",
	"systemsecurity",
	"taskmanage",
	"patientservice",
	"patientservice_zy",
	"patientservice_mz",
	"patientservice_generalservice",
	"patientservice_ghzpatientinfo",
	"patientservice_ht",
	"patientservice_ehcard",
	"template",
	"corporatepayment",
	"hisexternalapi",
	"digitalhospital",
	"micoservice",
	"im_chatconsultation",
	"clinicsettlement"
]};
apiServers.push(appxmbt);

//口腔医院
var appkmskqyy={name:"xmskqyy",url:"http://192.100.50.143:1000/swagger/docs/",vers:[
	"v1",
	"v2",
	"v3",
	"systemdefault",
	"pay",
	"paymange",
	"settlement",
	"systemmanage",
	"systemsecurity",
	"taskmanage",
	"patientservice",
	"patientservice_zy",
	"patientservice_mz",
	"patientservice_generalservice",
	"patientservice_ghzpatientinfo",
	"patientservice_ht",
	"patientservice_ehcard",
	"template",
	"corporatepayment",
	"hisexternalapi",
	"digitalhospital",
	"micoservice",
	"im_chatconsultation",
	"clinicsettlement"
]};
apiServers.push(appkmskqyy);


//his_xmbt_webapi
var his_xmbt_webapi={name:"his_xmbt_webapi",url:"http://app.byte-info.top:2004/swagger/",vers:[
	"v1/swagger.json"
]};
apiServers.push(his_xmbt_webapi);
//his_webapi
var his_webapi={name:"his_webapi",url:"http://app.byte-info.top:2007/swagger/",vers:[
	"v1/swagger.json"
]};
apiServers.push(his_webapi);



//xmbt_emr_webapi
var xmbt_emr_webapi={name:"xmbt_emr_webapi",url:"http://app.byte-info.top:3001/swagger/",vers:[
	"v1/swagger.json"
]};
apiServers.push(xmbt_emr_webapi);
//xmbt_webapi
var xmbt_webapi={name:"xmbt_webapi",url:"http://app.byte-info.top:3000/swagger/",vers:[
	"v1/swagger.json"
]};
apiServers.push(xmbt_webapi);

var apiList=[
	/*{
		name:"xmskqyy",
		url:"http://192.100.50.143:1000",
		childs:[
			{
				name:"v1",
				url:"https://app.byte-top.info:1000/swagger/docs/v1"
			},
			{
				name:"v2",
				url:"http://192.100.50.143:1000/swagger/docs/v2"
			}
		]
	}*/
];


$.each(apiServers,function(){
	var apiServer=this;
	apiServer.childs=[];
	$.each(apiServer.vers,function(){
		var apiVer=this+"";
		apiServer.childs.push({name:apiVer,url:apiServer.url+apiVer});
	});
	apiList.push(apiServer);
});
console.log(apiList);
function initApiSelect(){
	var $selectObj=$("#baseUrlSelect").hide();
	$('').click(function(){
		$selectObj.show();
	});
	$.each(apiList,function(){
		var api=this;
		var $li=$('<li  data-value='+api.url+'>'+(api.childs&& api.childs.length?'':api.name)+'</li>');
		$selectObj.append($li);
		if(api.childs && api.childs.length){
			$li.empty().bind("mouseover",function(e){
				$li.parent().find("div").hide();
				$(this).find("ul").show();
				$(this).find("div").show();
				//e.stopPropagation();    //  阻止事件冒泡
				//return false;
			});
			$li.append('<a href="javascript:;">'+api.name+'</a>');
			$childs=$('<div style="position:relative;left:190px;"></div>').appendTo($li);//
			
			$childs.append('<ul style="position:fixed"></ul>');
			$childs.hide();
			var $childsUI=$childs.find('ul');
			$.each(api.childs,function(){
				var api=this;
				var $childLi=$('<li data-value='+api.url+'>'+api.name+'</li>');//
				$childsUI.append($childLi);
			});
			
		}else{
			$li.bind("mouseover",function(e){
				$li.parent().find("div").hide();
				//e.stopPropagation();    //  阻止事件冒泡
				//return false;
			});
		}
	});
}
$(function(){
	initApiSelect();
	
});