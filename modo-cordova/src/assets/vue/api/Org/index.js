import base from 'api/base'

const api = {
	orgList: function (params) {
		var type = params.type;
		var url = '';
		switch (type) {
			case 'retail-price':
				url = '/org/AllDescendantSaleTree';
				break;
			case 'cost-price':
				url = '/org/AllSelfManageUnitTree';
				break;
			case 'inventory':
				url = '/org/AllStorages';
				break;

				
			default:
				break;
		}
		return base.post(url);
	}
}

export default api