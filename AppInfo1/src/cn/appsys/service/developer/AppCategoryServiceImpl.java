package cn.appsys.service.developer;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.appsys.dao.appcategory.AppCategoryMapper;
import cn.appsys.pojo.AppCategory;
@Service
public class AppCategoryServiceImpl implements AppCategoryService {

	@Resource
	public AppCategoryMapper appCategoryMapper;
	
	@Override
	public List<AppCategory> getAppCategoryListByParentId(Integer parentId)
			throws Exception {
		return appCategoryMapper.getAppCategoryListByParentId(parentId);
	}

}
