import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListService } from '../services/question'
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE,
} from '../constant'

type OptionType = {
  isStart: boolean
  isDeleted: boolean
}

function useLoadQuestionData(opt: Partial<OptionType> = {}) {
  const { isStart, isDeleted } = opt
  const [searchParams] = useSearchParams()

  const { data, loading, error, refresh } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
      const pageSize =
        parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') ||
        LIST_PAGE_SIZE

      const data = await getQuestionListService({
        keyword,
        isStart,
        isDeleted,
        page,
        pageSize,
      })
      return data
    },
    {
      refreshDeps: [searchParams],
    }
  )
  return { data, loading, error, refresh }
}

export default useLoadQuestionData
